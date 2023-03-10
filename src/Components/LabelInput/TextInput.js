import { TextField } from "@mui/material";
import React from "react";

export default function TextInput({
  value,
  onChange,
  style,
  type,
  textDir,
  placeholder,
}) {
  return (
    <TextField
      style={style}
      variant="standard"
      value={value}
      type={type ?? "text"}
      placeholder={placeholder}
      inputProps={{
        style: {
          color: "white",
          textAlign: textDir ?? "left",
          padding: 0,
          backgroundColor: "rgba(0,0,0,0.1)",
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
