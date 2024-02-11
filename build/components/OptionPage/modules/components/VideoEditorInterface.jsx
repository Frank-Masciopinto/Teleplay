import React, { useEffect, useState, useRef } from "react";
import Draggable from "react-draggable";
import videojs from "video.js";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";
import { Button } from "@material-ui/core";
import Overlay from "./Overlay.jsx";

import Image from "./Image.jsx";

function VideoEditorInterface({
  videoFile,
  videoRef,
  overlays,
  playerRef,
  setOverlays,
  setVideoFile,
  images,
}) {
  const [loaded, setLoaded] = useState(false);
  const [videoBounds, setVideoBounds] = useState(null);
  const [overlayPositions, setOverlayPositions] = useState([]);
  const [scaleX, setScaleX] = useState(1); // Horizontal scaling factor
  const [scaleY, setScaleY] = useState(1); // Vertical scaling factor
  const [backgroundFrameRate, setBackgroundFrameRate] = useState(0); // Background video frame rate
  const stateFrameRate = useRef(backgroundFrameRate);
  const ffmpegRef = useRef(new FFmpeg());
  const messageRef = useRef(null);
  const load_FFmpeg = async () => {
    const baseURL = "./components/OptionPage/modules/components/ffmpeg/umd";
    const ffmpeg = ffmpegRef.current;

    ffmpeg.on("log", ({ message }) => {
      messageRef.current.innerHTML = message;
      console.log(message);
      const frameRateMatch = message.match(/(\d+(\.\d+)?) fps/);
      if (frameRateMatch && stateFrameRate.current == 0) {
        const frameRate = parseFloat(frameRateMatch[1]);
        console.log("XXX Video frame rate:", frameRate);
        setBackgroundFrameRate(frameRate);
        stateFrameRate.current = frameRate;
      }
    });

    await ffmpeg.load({
      coreURL: chrome.runtime.getURL(`${baseURL}/ffmpeg-core.js`),
      wasmURL: chrome.runtime.getURL(`${baseURL}/ffmpeg-core.wasm`),
    });

    setLoaded(true);
  };
  async function getVideoFrameRate() {
    // Execute FFmpeg command to get video information
    const videoData = await fetchFile(videoFile);
    console.log(videoFile);
    console.log("---videoData");
    console.log(videoData);
    await ffmpegRef.current.writeFile("input.mp4", videoData); // Fetch and write the overlay image to FFmpeg's filesystem
    ffmpegRef.current.exec(["-i", "input.mp4"]);
  }
  const handleMetadataLoaded = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const originalWidth = videoElement.videoWidth;
      const originalHeight = videoElement.videoHeight;
      console.log(
        `Original Video dimensions: ${originalWidth}x${originalHeight}`
      );
      console.log(videoElement);
      setTimeout(() => {
        getVideoFrameRate();
      }, 2000);
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
    console.log("bounds: ", bounds);
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
    console.log(videoFile);
    // Fetch and write the video file to FFmpeg's filesystem
    const videoData = await fetchFile(videoFile);
    console.log(videoData);
    await ffmpeg.writeFile("input.mp4", videoData); // Fetch and write the overlay image to FFmpeg's filesystem

    function generateOverlayFilters() {
      return overlayPositions[0].timeline
        .map((timeline, index, array) => {
          let nextFrame =
            index < array.length - 1 ? array[index + 1].frame - 1 : "n+1";
          let chainStart = index > 0 ? `[v${index - 1}][1:v]` : `[0:v][1:v]`;
          let chainSuffix = `[v${index}]`;
          return `${chainStart}overlay=${timeline.x}:${timeline.y}:enable='between(n\\,${timeline.frame}\\,${nextFrame})'${chainSuffix}`;
        })
        .join(";");
    }

    //  i was implementing rotation angle and size in this way
    // let overlayFilters = overlayPositions
    //   .map((overlay, index) => {
    //     const rotationAngleRadians = overlay.rotationAngle * (Math.PI / 180);

    //     return `[0:v][${
    //       index + 1
    //     }:v]overlay=x=0:y=0 rotate=${rotationAngleRadians},scale=${
    //       overlay.width
    //     }:${overlay.height}`;
    //   })
    //   .join(";");

    // Include the overlay inputs and the filter in the FFmpeg command
    const ffmpegCommand = [
      "-hwaccel",
      "auto",
      "-i",
      "input.mp4",
      // Include each overlay as an input
      ...overlayPositions
        .map((overlay) => ["-i", overlay.fileNameFFMPEG])
        .flat(),
      "-filter_complex",
      `${generateOverlayFilters()}`,
      "-map",
      `[v${overlayPositions[0].timeline.length - 1}]`, // Map the final overlay to the output
      "-r",
      "30",
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
  const handleDrag = async (index, e, data, overlayPath) => {
    let imageElement = document.querySelector(`.draggable-${index}`);
    //check if already scaled image dimensions efore
    // if (!imageElement.style.width) {
    //   imageElement.style.width = imageElement.width * scaleX + "px";
    //   imageElement.style.height = imageElement.height * scaleY + "px";
    // }
    console.log("handleDrag()");
    let currentBackgroundFrame = getVideoFramePosition();
    // Assuming videoRef is a reference to your video element
    let [finalX, finalY, adjustedX, adjustedY] = scalePosition(
      data,
      imageElement
    );

    const newMovement = {
      x: finalX,
      y: finalY,
      frame: currentBackgroundFrame,
    };
    console.log(`newMovement`, newMovement);
    //Adding new movement to the timeline of overlay
    setOverlayPositions((prevPositions) => {
      return prevPositions.map((item) => {
        if (item.overlayPath === overlayPath) {
          const existingMovementIndex = item.timeline.findIndex(
            (movement) => movement.frame === newMovement.frame
          );
          if (existingMovementIndex !== -1) {
            // Update existing movement
            const updatedTimeline = [...item.timeline];
            updatedTimeline[existingMovementIndex] = newMovement;
            return { ...item, timeline: updatedTimeline };
          } else {
            // Add new movement to array
            return { ...item, timeline: [...item.timeline, newMovement] };
          }
        }
        return item;
      });
    });
  };
  const scalePosition = (data, imageElement) => {
    console.log(data);
    const videoElement = videoRef.current;
    const imageElementHalfWidth = imageElement.width / 2 / scaleX;
    console.log("image Element Half Width", imageElementHalfWidth);
    const parentWidth = videoElement.parentElement.offsetWidth;
    const parentHeight = videoElement.parentElement.offsetHeight;
    console.log("parentWidth", parentWidth);
    console.log("x", data.x - imageElementHalfWidth);
    // Calculate the offset from the center to the top-left corner
    const offsetX = parentWidth / 2;
    const offsetY = parentHeight / 2;
    console.log("offsetX", offsetX);
    let xLeftBoundOffset = data.x - imageElementHalfWidth + offsetX;
    console.log("xLeftBoundOffset", xLeftBoundOffset);
    // Adjust the coordinates
    const adjustedX = xLeftBoundOffset * scaleX;
    console.log("scaleX", scaleX);
    const adjustedY = data.y * scaleY;
    console.log("adjustedX", adjustedX);
    // Ensure coordinates are positive
    const finalX = Math.max(0, adjustedX);
    const finalY = Math.max(0, adjustedY);
    console.log("finalX", finalX);
    return [finalX, finalY, adjustedX, adjustedY];
  };
  const getVideoFramePosition = () => {
    const videoElement = videoRef.current;
    const currentTimeInSeconds = videoElement ? videoElement.currentTime : 0; // Current time in seconds
    const timestamp = currentTimeInSeconds * 1000; // Convert to milliseconds
    const frameNumber = Math.round((timestamp / 1000) * stateFrameRate.current); // Convert milliseconds to frame number
    console.log("timestamp", timestamp);
    return frameNumber;
  };
  // Function to handle overlay movements

  const updateoverlayPositions = (image, index) => {
    let overlayImages = [...overlayPositions];
    overlayImages[index] = image;
    setOverlayPositions(overlayImages);
  };
  console.log(overlayPositions, "overlayPositions");
  useEffect(() => {
    //every time overlay changes, write the new overlay to ffmpeg file system
    overlays?.forEach((overlayPath, index) => {
      // Find the index of the last occurrence of '/'
      const lastIndex = overlayPath.lastIndexOf("/");
      // Extract the substring after the last '/'
      const overlayName = overlayPath.substring(lastIndex + 1);
      const overlayFileName = `${overlayName}.png`;
      // Write the blob URL to the FFmpeg file system with the defined filename
      writeOverlayToFFmpegFS(overlayFileName, overlayPath);
    });
  }, [overlays]);
  async function writeOverlayToFFmpegFS(fileName, blobUrl) {
    // Check if the file already exists
    const fileExists = overlayPositions.some(
      (position) => position.fileNameFFMPEG == fileName
    );

    // If the file already exists, don't overwrite
    if (fileExists) {
      console.log(
        `File ${fileName} already exists. Skipping writing operation.`
      );
      return;
    }

    const response = await fetch(blobUrl);
    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);
    await ffmpegRef.current.writeFile(fileName, uint8Array);
    //init overlay fileName to overlayPositions
    setOverlayPositions((prevPositions) => {
      return [
        ...prevPositions,
        { overlayPath: blobUrl, fileNameFFMPEG: fileName, timeline: [] },
      ];
    });
  }
  return (
    <div>
      <div data-vjs-player>
        <video ref={videoRef} className="video-js vjs-big-play-centered">
          <source src={videoFile} type="video/mp4" />
        </video>
        {videoBounds &&
          overlays?.map((image, index) => (
            <Draggable
              key={index}
              axis="both"
              bounds="parent"
              onDrag={(e, data) => handleDrag(index, e, data, image)}
            >
         

              {/* </div> */}
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
