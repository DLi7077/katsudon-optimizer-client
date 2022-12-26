import { TextField } from "@mui/material";
import React from "react";

export default function NumberInput({ value, onChange, style, textDir }) {
  return (
    <TextField
      style={style}
      variant="standard"
      value={value}
      type="number"
      inputProps={{
        style: {
          color: "white",
          textAlign: textDir ?? "left",
          padding: 0,
          backgroundColor: "rgba(0,0,0,0.1)",
          fontFamily: "Consolas",
        },
      }}
      sx={{
        // underline color
        "& .MuiInput-underline:before": {
          borderBottomColor: "rgba(0,0,0,0)",
        },
        "& .MuiInput-underline:after": { borderBottom: "1px solid white" },
      }}
      onChange={onChange}
    />
  );
}
