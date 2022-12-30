import React from "react";
import ArtifactIcon from "../../../../Components/ArtifactIcon";
import { isPercentageStat } from "../../../../Utils/validate";
import Substat from "./Substat.js";

const classes = {
  artifact: {
    padding: "0.35rem",
    paddingInline: "1rem",
    width: "250px",
  },
  mainStat: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "1.125rem",
    textAlign: "right",
    gap: "1rem",
  },
  substatList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

const formatToPercent = (x) => {
  return (x * 100).toFixed(1);
};

function MainStat({ label, value }) {
  return (
    <span>
      <span>{label}</span>{" "}
      {isPercentageStat(label) ? formatToPercent(value) : value}
    </span>
  );
}

export default function Artifact({ piece, mainstat, substats }) {
  const { label, value } = mainstat;

  return (
    <div style={classes.artifact}>
      <div style={classes.mainStat}>
        <ArtifactIcon piece={piece} style={{ width: "48px", height: "48px" }} />
        <MainStat label={label} value={value} />
      </div>
      <div style={classes.substatList}>
        {substats.map((substat, idx) => {
          const { label, value, rolls } = substat;
          return (
            <Substat
              key={`${piece}-substat-${idx}`}
              label={label}
              value={value}
              rolls={rolls}
            />
          );
        })}
      </div>
    </div>
  );
}
