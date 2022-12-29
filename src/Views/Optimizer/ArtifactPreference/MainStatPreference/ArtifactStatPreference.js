import React from "react";
import ArtifactPiece from "./ArtifactPiece";
import StatItem from "../StatItem";

export default function ArtifactStatPreference(props) {
  const disabledStats = props.mainStats.filter((mainStat) => {
    return !!mainStat.disabled;
  });

  const enabledStats = props.mainStats.filter((mainStat) => {
    return !mainStat.disabled;
  });

  return (
    <div className="align-down-center">
      <div className="align-horizontal-center">
        <ArtifactPiece piece={props.piece} />
        {disabledStats.map((mainStat, idx) => {
          return (
            <StatItem
              key={`${props.piece}-main-stat-${idx}`}
              label={mainStat.label}
              selected={mainStat.selected}
              disabled={mainStat.disabled}
            />
          );
        })}
      </div>
      <div
        className="align-horizontal-center"
        style={{ gap: "1rem", flexWrap: "wrap", maxWidth: "400px" }}>
        {enabledStats.map((mainStat, idx) => {
          return (
            <StatItem
              key={`${props.piece}-main-stat-${idx}`}
              label={mainStat.label}
              selected={mainStat.selected}
              disabled={mainStat.disabled}
              updateSelected={() => {
                props.update(idx);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
