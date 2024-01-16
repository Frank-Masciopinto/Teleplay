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
  const ffmpegRef = useRef(new FFmpeg());
  const messageRef = useRef(null);
  const load_FFmpeg = async () => {
    const baseURL = "./components/OptionPage/modules/components/ffmpeg/umd";
    const ffmpeg = ffmpegRef.current;

    ffmpeg.on("log", ({ message }) => {
    //   messageRef.current.innerHTML = message;
      console.log(message);
    });

    await ffmpeg.load({
      coreURL: chrome.runtime.getURL(`${baseURL}/ffmpeg-core.js`),
      wasmURL: chrome.runtime.getURL(`${baseURL}/ffmpeg-core.wasm`),
    });

    setLoaded(true);
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
    }

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
    setVideoFile(null);
    // Example FFmpeg command (replace with your desired editing operations)
    await ffmpeg.exec(["-i", "input.mp4", "-vf", "transpose=1", "output.mp4"]);

    // Read the edited video file
    const data = await ffmpeg.readFile("output.mp4");
    let edited_video_url = URL.createObjectURL(
      new Blob([data.buffer], { type: "video/mp4" })
    );
    console.log("Finished editing editedVideoUrl");
    console.log(edited_video_url);
    setVideoFile(edited_video_url);
  }

  return (
    <div>
      <div data-vjs-player>
        <video
          ref={videoRef}
          className="video-js vjs-big-play-centered"
          style={{ width: "100%" }}
        >
          <source src={videoFile} type="video/mp4" />
        </video>
      </div>
      {overlays.map((overlay, index) => (
        <Draggable key={index}>
          <img
            src={overlay}
            className="overlay-image"
            alt={`Overlay ${index}`}
            style={{ position: "absolute", zIndex: 2 }}
          />
        </Draggable>
      ))}
      {loaded && (
        <Button variant="contained" color="primary" onClick={renderVideo}>
          Render Video
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
