import React, { useEffect, useRef, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { DragDropBackground, DragDropOverlay } from "./components/DragDrop.jsx";
import VideoEditorInterface from "./components/VideoEditorInterface.jsx";

const VideoEditor = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [overlays, setOverlays] = useState([]);
  const [isDarkMode, setDarkMode] = useState(false);
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  return (
    <Grid container spacing={2} className="video-container">
      <Grid item xs={12} style={{ background: "#ebecf0" }}>
        {videoFile ? (
          <VideoEditorInterface
            videoFile={videoFile}
            videoRef={videoRef}
            isDarkMode={isDarkMode}
            setDarkMode={setDarkMode}
            overlays={overlays}
            setOverlays={setOverlays}
            playerRef={playerRef}
            setVideoFile={setVideoFile}
          />
        ) : (
          <Paper elevation={7} className="video-placeholder"></Paper>
        )}
      </Grid>
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
