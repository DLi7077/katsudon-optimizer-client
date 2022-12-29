import React from "react";
import { ARTIFACT_PIECE } from "../../../../Constants/artifact";

const classes = {
  artifactPiece: {
    width: "64px",
    height: "64px",
  },
};
export default function ArtifactPiece({ piece }) {
  return (
    <img
      src={ARTIFACT_PIECE[piece]}
      style={classes.artifactPiece}
      alt={`${piece} artifact piece`}
    />
  );
}
