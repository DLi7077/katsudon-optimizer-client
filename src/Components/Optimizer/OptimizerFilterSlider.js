import React from "react";
import { Slider } from "@mui/material";

export default function OptimizerFilterSlider({ value, onChange, style }) {
  return (
    <Slider
      style={style}
      value={value}
      valueLabelDisplay="auto"
      step={5}
      marks
      min={10}
      max={100}
      onChange={onChange}
    />
  );
}
