import React from "react";
import { isPercentageStat } from "../../../../Utils/validate";

const classes = {
  substat: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
};

const formatToPercent = (x) => {
  return (x * 100).toFixed(2);
};

export default function Substat({ label, value, rolls = 0 }) {
  return (
    <div style={classes.substat}>
      <div>{label}</div>
      <div>{isPercentageStat(label) ? formatToPercent(value) : value} ({rolls})</div>
    </div>
  );
}
