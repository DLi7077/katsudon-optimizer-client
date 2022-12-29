import React from "react";

const classes = {
  statItem: {
    padding: "0.25rem",
    paddingInline: "1rem",
    borderRadius: "100px",
    cursor: "pointer",
    backgroundColor: "#000000",
    minWidth: "40px",
    width: "fit-content",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  notSelected: {
    backgroundColor: "#000000",
  },
  selected: {
    backgroundColor: "#4E5A5F",
    outline: "1px solid white",
  },
};

export default function StatItem({ label, selected, updateSelected }) {
  return (
    <div
      onClick={() => {
        updateSelected();
      }}
      style={{
        ...classes.statItem,
        ...(selected ? classes.selected : classes.notSelected),
      }}>
      {label}
    </div>
  );
}
