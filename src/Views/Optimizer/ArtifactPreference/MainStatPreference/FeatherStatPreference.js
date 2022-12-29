import React from "react";
import ArtifactPiece from "./ArtifactPiece";
import StatItem from "../StatItem";

export default function FeatherStatPreference(props) {
  return (
    <div className="align-horizontal-center">
      <ArtifactPiece piece={"feather"} />
      {props.mainStats.map((mainStat, idx) => {
        return (
          <StatItem
            key={`feather-main-stat-${idx}`}
            label={mainStat.label}
            disabled={mainStat.disabled}
          />
        );
      })}
    </div>
  );
}
