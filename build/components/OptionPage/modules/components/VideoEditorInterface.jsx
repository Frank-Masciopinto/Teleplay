import React, { useEffect, useState, useRef } from "react";
import Draggable from "react-draggable";
import videojs from "video.js";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";
import { Button } from "@material-ui/core";
import Overlay from "./Overlay.jsx";
function VideoEditorInterface({
  videoFile,
  videoRef,
  overlays,
  playerRef,
  setOverlays,
  setVideoFile,
}) {
  const [loaded, setLoaded] = useState(false);
  const [videoBounds, setVideoBounds] = useState(null);
  const [overlayPositions, setOverlayPositions] = useState([]);
  const [scaleX, setScaleX] = useState(1); // Horizontal scaling factor
  const [scaleY, setScaleY] = useState(1); // Vertical scaling factor
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
      const originalWidth = videoElement.videoWidth;
      const originalHeight = videoElement.videoHeight;
      console.log(
        `Original Video dimensions: ${originalWidth}x${originalHeight}`
      );

      const aspectRatio = originalWidth / originalHeight;
      const containerHeight = window.innerHeight * 0.7; // 70vh
      const newWidth = containerHeight * aspectRatio;

      videoElement.parentElement.style.width = `${newWidth}px`;

      // Calculate and update scaling factors
      const renderedWidth = videoElement.clientWidth;
      const renderedHeight = videoElement.clientHeight;
      console.log("renderedWidth", renderedWidth);
      console.log("scaled width", originalWidth / renderedWidth);
      console.log("renderedHeight", renderedHeight);
      setScaleX(originalWidth / renderedWidth);
      setScaleY(originalHeight / renderedHeight);
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
  async function writeBlobToFFmpegFS(path, blobUrl) {
    const response = await fetch(blobUrl);
    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);
    await ffmpegRef.current.writeFile(path, uint8Array);
  }
  async function renderVideo() {
    console.log("☘️ renderVideo");
    const ffmpeg = ffmpegRef.current;
    console.log(ffmpeg);
    // Fetch and write the video file to FFmpeg's filesystem
    const videoData = await fetchFile(videoFile);
    await ffmpeg.writeFile("input.mp4", videoData); // Fetch and write the overlay image to FFmpeg's filesystem

    // Construct the overlay filter part
    let overlayFilters = overlayPositions
      .map((overlay, index) => {
        return `[0:v][${index + 1}:v]overlay=${overlay.x}:${overlay.y}`;
      })
      .join(";");

    // Include the overlay inputs and the filter in the FFmpeg command
    const ffmpegCommand = [
      "-hwaccel",
      "auto",
      "-i",
      "input.mp4",
      // Include each overlay as an input
      ...overlayPositions.map((overlay) => ["-i", "overlay0.png"]).flat(),
      "-filter_complex",
      overlayFilters, // Add the overlay filters here
      "-c:v",
      "libx264",
      "-preset",
      "fast",
      "output.mp4",
    ];
    console.log("⭐⭐⭐ffmpegCommand");
    console.log(ffmpegCommand);
    // Example FFmpeg command (replace with your desired editing operations)
    await ffmpeg.exec(ffmpegCommand);
    // Read the edited video file
    const data = await ffmpeg.readFile("output.mp4");
    let edited_video_url = URL.createObjectURL(
      new Blob([data.buffer], { type: "video/mp4" })
    );
    setVideoFile(null);
    setOverlays([]);
    console.log("🟢 Finished editing editedVideoUrl 🟢");
    console.log(edited_video_url);
    setVideoFile(edited_video_url);
  }
  const handleStop = async (index, e, data, overlayPath) => {
    console.log(`Original Position - X: ${data.x}, Y: ${data.y}`);
    console.log(`Scaling Factors - scaleX: ${scaleX}, scaleY: ${scaleY}`);
    // Assuming videoRef is a reference to your video element
    const videoElement = videoRef.current;
    const parentWidth = videoElement.parentElement.offsetWidth;
    const parentHeight = videoElement.parentElement.offsetHeight;

    // Calculate the offset from the center to the top-left corner
    const offsetX = parentWidth / 2;
    const offsetY = parentHeight / 2;

    // Adjust the coordinates
    const adjustedX = (data.x + offsetX) * scaleX;
    const adjustedY = data.y * scaleY;

    // Ensure coordinates are positive
    const finalX = Math.max(0, adjustedX);
    const finalY = Math.max(0, adjustedY);

    console.log(`Adjusted Position - X: ${finalX}, Y: ${finalY}`);
    console.log("index", index);
    const overlayFileName = `overlay${index}.png`;

    // Write the blob URL to the FFmpeg file system with the defined filename
    await writeBlobToFFmpegFS(overlayFileName, overlayPath);
    setOverlayPositions((prevPositions) => {
      const found = prevPositions.some(
        (item) => item.overlayPath === overlayPath
      );

      if (found) {
        return prevPositions.map((item) =>
          item.overlayPath === overlayPath
            ? { ...item, x: finalX, y: finalY }
            : item
        );
      } else {
        return [
          ...prevPositions,
          { overlayPath: overlayPath, x: adjustedX, y: adjustedY },
        ];
      }
    });
  };

  return (
    <div>
      <div data-vjs-player>
        <video ref={videoRef} className="video-js vjs-big-play-centered">
          <source src={videoFile} type="video/mp4" />
        </video>
        {videoBounds &&
          overlays.map((overlay, index) => (
            <Draggable
              key={index}
              bounds="parent"
              onStop={(e, data) => handleStop(index, e, data, overlay)}
            >
              <img src={overlay}></img>
            </Draggable>
          ))}
      </div>

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
