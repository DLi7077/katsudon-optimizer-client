import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import { IconButton } from "@mui/material";

const classes = {
  defaultClose: {
    fontSize: "1rem",
    color: "#4dd669",
    padding: 0,
  },
};

export default function CheckButton({ style, onClick }) {
  return (
    <IconButton style={style} onClick = {onClick}>
      <CheckIcon style={{ ...classes.defaultClose }}></CheckIcon>
    </IconButton>
  );
}