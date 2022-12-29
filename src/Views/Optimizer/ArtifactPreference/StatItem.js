import React from "react";

const classes = {
  statItem: {
    padding: "0.25rem",
    paddingInline: "0.75rem",
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
    backgroundColor: "#8B5A37",
  },
  disabled: {
    backgroundColor: "#2E3762",
    cursor: "not-allowed",
  },
};

export default function StatItem({
  label,
  selected,
  disabled,
  updateSelected,
}) {
  return (
    <div
      onClick={updateSelected}
      style={{
        ...classes.statItem,
        ...(selected ? classes.selected : classes.notSelected),
        ...(disabled ? classes.disabled : {}),
      }}>
      {label}
    </div>
  );
}
