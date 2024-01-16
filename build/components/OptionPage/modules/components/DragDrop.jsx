import { DropzoneArea } from "material-ui-dropzone";
import React from "react";
export function DragDropBackground({ setVideoFile }) {
  const onVideoDrop = (acceptedFiles) => {
    console.log("onVideoDrop");
    console.log(acceptedFiles);
    if (
      acceptedFiles &&
      acceptedFiles[0] &&
      acceptedFiles[0].type.startsWith("video/")
    ) {
      const videoUrl = URL.createObjectURL(acceptedFiles[0]);
      console.log(videoUrl);
      setVideoFile(videoUrl); // Set the video URL here
    } else {
      console.error("Please upload a valid video file.");
    }
  };

  return (
    <DropzoneArea
      acceptedFiles={["video/*"]}
      dropzoneText="Drag 'n' drop a video here, or click to select a video"
      onChange={onVideoDrop}
    />
  );
}

export function DragDropOverlay({ setOverlays }) {
  const onOverlayDrop = (acceptedFiles) => {
    const newOverlay = URL.createObjectURL(acceptedFiles[0]);
    console.log("uploading overlay");
    console.log(acceptedFiles[0]);
    setOverlays([...overlays, newOverlay]);
  };
  return (
    <DropzoneArea
      acceptedFiles={["image/*"]}
      dropzoneText="Drag 'n' drop overlay images here, or click to select images"
      onChange={() => onOverlayDrop}
    />
  );
}
