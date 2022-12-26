import React from "react";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
const classes = {
  addBuffButton: {
    padding: 0,
    color: "white",
  },
};

export default function AddButton({ onClick }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <IconButton style={classes.addBuffButton} onClick={onClick}>
        <AddIcon />
      </IconButton>
    </div>
  );
}
