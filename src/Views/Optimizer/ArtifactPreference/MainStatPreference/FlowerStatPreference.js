import React from "react";
import ArtifactPiece from "./ArtifactPiece";
import StatItem from "../StatItem";

export default function FlowerStatPreference(props) {
  return (
    <div className="align-horizontal-center">
      <ArtifactPiece piece={"flower"} />
      {props.mainStats.map((mainStat, idx) => {
        return (
          <StatItem
            key={`flower-main-stat-${idx}`}
            label={mainStat.label}
            disabled={mainStat.disabled}
          />
        );
      })}
    </div>
  );
}
