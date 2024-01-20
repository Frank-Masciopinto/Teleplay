import React, { useEffect, useState, useRef } from "react";
import Draggable from "react-draggable";
import videojs from "video.js";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";
import { Button } from "@material-ui/core";
function VideoEditorInterface({
  videoFile,
  videoRef,
  overlays,
  playerRef,
  setVideoFile,
}) {
  const [loaded, setLoaded] = useState(false);
  const [videoBounds, setVideoBounds] = useState(null);
  const ffmpegRef = useRef(new FFmpeg());
  const messageRef = useRef(null);
  const load_FFmpeg = async () => {
    const baseURL = "./components/OptionPage/modules/components/ffmpeg/umd";
    const ffmpeg = ffmpegRef.current;

    ffmpeg.on("log", ({ message }) => {
      messageRef.current.innerHTML = message;
      console.log(message);
    });

    await ffmpeg.load({
      coreURL: chrome.runtime.getURL(`${baseURL}/ffmpeg-core.js`),
      wasmURL: chrome.runtime.getURL(`${baseURL}/ffmpeg-core.wasm`),
    });

    setLoaded(true);
  };
  const handleMetadataLoaded = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const width = videoElement.videoWidth;
      const height = videoElement.videoHeight;
      console.log(`Video dimensions: ${width}x${height}`);
      const aspectRatio = width / height;
      const containerHeight = window.innerHeight * 0.7; // 70vh
      const newWidth = containerHeight * aspectRatio;
      videoElement.parentElement.style.width = `${newWidth}px`;

      // Construct your FFmpeg command here
      // For example, position the overlay at the bottom right
      // let posX = width - overlayWidth - 10;
      // let posY = height - overlayHeight - 10;
      // let ffmpegCommand = `ffmpeg.exec -i input_video.mp4 -i overlay_image.png -filter_complex "overlay=${posX}:${posY}" -codec:a copy output_video.mp4`;
      // console.log("FFmpeg Command:", ffmpegCommand);
    }
  };
  useEffect(() => {
    // Initialize video.js player
    load_FFmpeg();
    if (videoRef.current) {
      playerRef.current = videojs(videoRef.current, {
        controls: true,
        autoplay: false,
        preload: "auto",
      });
      videoRef.current.addEventListener("loadedmetadata", handleMetadataLoaded);
    }
    const bounds = videoRef.current.getBoundingClientRect();
    setVideoBounds(bounds);
    return () => {
      // Dispose the player on unmount
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, [videoRef, playerRef]);

  async function renderVideo() {
    console.log("☘️ renderVideo");
    const ffmpeg = ffmpegRef.current;
    console.log(ffmpeg);
    // Fetch and write the video file to FFmpeg's filesystem
    const videoData = await fetchFile(videoFile);
    await ffmpeg.writeFile("input.mp4", videoData); // Fetch and write the overlay image to FFmpeg's filesystem

    // Example FFmpeg command (replace with your desired editing operations)
    await ffmpeg.exec([
      "-hwaccel",
      "auto", // Use hardware acceleration if available
      "-i",
      "input.mp4",
      "-vf",
      "transpose=1",
      "-c:v",
      "libx264", // Use a specific encoder, change as needed
      "-preset",
      "fast", // Faster encoding with slightly higher file size
      "output.mp4",
    ]);
    // Read the edited video file
    const data = await ffmpeg.readFile("output.mp4");
    let edited_video_url = URL.createObjectURL(
      new Blob([data.buffer], { type: "video/mp4" })
    );
    setVideoFile(null);
    console.log("Finished editing editedVideoUrl");
    console.log(edited_video_url);
    setVideoFile(edited_video_url);
  }

  return (
    <div>
      <div data-vjs-player>
        <video ref={videoRef} className="video-js vjs-big-play-centered">
          <source src={videoFile} type="video/mp4" />
        </video>
        {videoBounds &&
          overlays.map((overlay, index) => (
            <Draggable key={index} bounds="parent">
              <img
                src={overlay}
                className="overlay-image"
                alt={`Overlay ${index}`}
                style={{ position: "absolute", zIndex: 2 }}
              />
            </Draggable>
          ))}
      </div>

      {loaded && (
        <Button variant="contained" color="primary" onClick={renderVideo}>
          Rotate 90 and Render Video
        </Button>
      )}
      <p ref={messageRef}></p>
      <p>
        {loaded
          ? "FFmpeg is ready. You can now render the video."
          : "Loading FFmpeg... Please wait."}
      </p>
    </div>
  );
}

export default VideoEditorInterface;
