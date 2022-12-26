import React from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { IconButton } from "@mui/material";

const classes = {
  defaultClose: {
    fontSize: "1rem",
    color: "white",
    padding: 0,
  },
};

export default function CloseButton({ style, onClick }) {
  return (
    <IconButton style={style} onClick={onClick}>
      <RemoveCircleOutlineIcon style={{ ...classes.defaultClose }}></RemoveCircleOutlineIcon>
    </IconButton>
  );
}
