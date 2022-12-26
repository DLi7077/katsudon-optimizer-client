import React from "react";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
const classes = {
  addBuffButton: {
    padding: 0,
    color: "white",
    borderRadius: 0,
    border: "1px solid white",
  },
  icon: {
    fontSize: "1rem",
  },
};

export default function AddButton({ onClick, style }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <IconButton style={classes.addBuffButton} onClick={onClick}>
        <AddIcon style={{ ...classes.icon, ...style }} />
      </IconButton>
    </div>
  );
}
