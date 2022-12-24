import React from "react";

const classes = {
  icon: {
    width: "28px",
    height: "28px",
    cursor: "pointer",
  },
};

export default function ElementIcon({ src, onClick, style }) {
  return (
    <img
      src={src}
      style={{ ...classes.icon, ...style }}
      onClick={onClick}
      alt="element button"
    />
  );
}
