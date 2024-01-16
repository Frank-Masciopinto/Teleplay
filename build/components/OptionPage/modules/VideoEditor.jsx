import React, { useRef, useState } from "react";
import { Grid } from "@material-ui/core";
import { DragDropBackground, DragDropOverlay } from "./components/DragDrop.jsx";
import VideoEditorInterface from "./components/VideoEditorInterface.jsx";

const VideoEditor = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [overlays, setOverlays] = useState([]);
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  return (
    <Grid container spacing={2}>
      {videoFile && (
        <Grid item xs={12} className="video-container">
          <VideoEditorInterface
            videoFile={videoFile}
            videoRef={videoRef}
            overlays={overlays}
            playerRef={playerRef}
            setVideoFile={setVideoFile}
          />
        </Grid>
      )}
      <Grid item xs={2}>
        <DragDropBackground setVideoFile={setVideoFile} />
      </Grid>
      <Grid item xs={2}>
        <DragDropOverlay setOverlays={setOverlays} />
      </Grid>
    </Grid>
  );
};

export default VideoEditor;
