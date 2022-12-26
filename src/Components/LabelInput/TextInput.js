import { TextField } from "@mui/material";
import React from "react";

export default function TextInput({ value, onChange }) {
  return (
    <TextField
      style={{ width: "95%" }}
      variant="standard"
      value={value}
      placeholder="Buff Name"
      inputProps={{
        style: {
          color: "white",
          textAlign: "left",
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
