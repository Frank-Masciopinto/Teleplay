import React from "react";
import { DropzoneArea } from "material-ui-dropzone";
import { Typography, Paper } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export function DragDropBackground({ setVideoFile }) {
  const onVideoDrop = (acceptedFiles) => {
    console.log("onVideoDrop", acceptedFiles);
    if (
      acceptedFiles &&
      acceptedFiles[0] &&
      acceptedFiles[0].type.startsWith("video/")
    ) {
      const videoUrl = URL.createObjectURL(acceptedFiles[0]);
      console.log(videoUrl);
      setVideoFile(videoUrl);
    } else {
      console.error("Please upload a valid video file.");
    }
  };

  return (
    <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
      <DropzoneArea
        acceptedFiles={["video/*"]}
        dropzoneText={
          <Typography variant="h6" style={{ marginBottom: "20px" }}>
            Drag 'n' drop a background video here, or click to select
          </Typography>
        }
        Icon={CloudUploadIcon}
        showAlerts={["error"]} // Only show error alerts
        onChange={onVideoDrop}
        dropzoneClass="dropzone-style"
        maxFileSize={500000000} // Example: 500MB limit
        filesLimit={1} // Limit number of files
        showPreviewsInDropzone={false} // Do not show file previews inside dropzone
        useChipsForPreview // Use chips to show file previews below dropzone
        previewGridProps={{ container: { spacing: 1, direction: "row" } }}
        previewChipProps={{ classes: { root: "previewChip" } }}
        previewText="Selected video:"
      />
    </Paper>
  );
}
import ImageIcon from "@mui/icons-material/Image";

export function DragDropOverlay({ setOverlays }) {
  const onOverlayDrop = (acceptedFiles) => {
    console.log("Uploading overlay", acceptedFiles);
    if (acceptedFiles.length === 0) return;
    const newOverlay = URL.createObjectURL(acceptedFiles[0]);
    setOverlays((prevOverlays) => [...prevOverlays, newOverlay]); // To allow multiple overlays
  };

  return (
    <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
      <DropzoneArea
        acceptedFiles={["image/*"]}
        dropzoneText={
          <Typography variant="h6" style={{ marginBottom: "20px" }}>
            Drag 'n' drop overlay images here, or click to select images
          </Typography>
        }
        Icon={ImageIcon}
        showAlerts={["error"]} // Only show error alerts
        onChange={onOverlayDrop}
        dropzoneClass="overlay-dropzone-style"
        maxFileSize={100000000} // Example: 100MB limit
        filesLimit={10} // Adjust based on how many overlays you want to allow
        showPreviewsInDropzone={false} // Do not show file previews inside dropzone
        useChipsForPreview // Use chips to show file previews below dropzone
        previewGridProps={{ container: { spacing: 1, direction: "row" } }}
        previewChipProps={{ classes: { root: "previewChip" } }}
        previewText="Selected overlays:"
      />
    </Paper>
  );
}