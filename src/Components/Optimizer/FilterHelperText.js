import React from "react";
import { Tooltip } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

function PopupText() {
  return (
    <div style={{ fontSize: "1rem" }}>
      As this value increases, Katsudon Optimizer spends more time for a higher
      chance to find the best artifact combination.
      <div style={{ height: "0.4rem" }} />
      It's recommended to increase this if you're considering multiple artifact
      stats.
      <div style={{ height: "0.4rem" }} />
      50 seems to be the sweet spot, but feel free to experiment!
    </div>
  );
}
export default function FilterHelperText() {
  return (
    <Tooltip title={<PopupText />} placement="right">
      <HelpOutlineIcon />
    </Tooltip>
  );
}
