import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

const classes = {
  defaultClose: {
    fontSize: "1.25rem",
    color: "#de6d21",
    padding: 0,
  },
};

export default function CloseButton({ style, onClick }) {
  return (
    <IconButton style={style} onClick={onClick}>
      <CloseIcon style={{ ...classes.defaultClose }}></CloseIcon>
    </IconButton>
  );
}
