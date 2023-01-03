import React from "react";
import ArtifactStatPreference from "./ArtifactStatPreference";
import { map, omit, pick } from "lodash";

const classes = {
  title: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
  },
};

function doNothing() {}

export default function MainStatPreference(props) {
  const artifactPieces = {
    flower: {
      mainStats: props.flowerMainStats,
      update: doNothing,
    },
    feather: {
      mainStats: props.featherMainStats,
      update: doNothing,
    },
    sands: {
      mainStats: props.sandsMainStats,
      update: props.updateSandsPreference,
    },
    goblet: {
      mainStats: props.gobletMainStats,
      update: props.updateGobletPreference,
    },
    circlet: {
      mainStats: props.circletMainStats,
      update: props.updateCircletPreference,
    },
  };

  const disabledPieces = ["flower", "feather"];
  const disabledArtifactPieces = pick(artifactPieces, disabledPieces);
  const enabledArtifactPieces = omit(artifactPieces, disabledPieces);

  return (
    <div className="align-down-center" style={{ gap: "1rem" }}>
      <div style={classes.title}>
        <div style={{ fontSize: "1.5rem" }}>Main stat Preferences</div>
        <div style={{ color: "#C68C62" }}>
          *pick at least 1 main stat per artifact peice
        </div>
      </div>
      <div className="align-horizontal-center" style={{ gap: "4rem" }}>
        {map(disabledArtifactPieces, ({ mainStats, update }, piece) => {
          return (
            <ArtifactStatPreference
              key={`artifact-${piece}-main-stat-selection`}
              mainStats={mainStats}
              piece={piece}
              update={update}
            />
          );
        })}
      </div>
      <div
        className="align-horizontal-center"
        style={{ alignItems: "flex-start", gap: "2rem", flexWrap: "wrap" }}>
        {map(enabledArtifactPieces, ({ mainStats, update }, piece) => {
          return (
            <ArtifactStatPreference
              key={`artifact-${piece}-main-stat-selection`}
              mainStats={mainStats}
              piece={piece}
              update={update}
            />
          );
        })}
      </div>
    </div>
  );
}
