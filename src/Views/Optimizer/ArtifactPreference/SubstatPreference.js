import React from "react";
import StatItem from "./StatItem";

const classes = {
  title: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.25rem",
  },
  substatContainer: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "640px",
  },
};

export default function SubstatPreference(props) {
  return (
    <div className="align-down-center" style={{ gap: "2.5rem" }}>
      <div style={classes.title}>
        <div style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>
          Substat Preferences
        </div>
        <div style={{ color: "#C68C62" }}>*pick at least 5 substats</div>
      </div>
      <div style={classes.substatContainer}>
        {props.preferredSubstats.map((substat, index) => {
          const { label, selected } = substat;
          console.log(selected);
          return (
            <StatItem
              label={label}
              selected={selected}
              updateSelected={() => {
                props.updateSubstatPreference(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
