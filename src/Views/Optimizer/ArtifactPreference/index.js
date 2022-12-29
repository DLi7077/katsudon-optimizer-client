import React from "react";
import SubstatPreference from "./SubstatPreference";
import "../styles.css";
import Title from "./Title";
import MainStatPreference from "./MainStatPreference";

export default function ArtifactPreference({
  artifactPreference,
  updateSubstatPreference,
  updateSandsPreference,
  updateGobletPreference,
  updateCircletPreference,
}) {
  return (
    <div className="optimize-section artifact-part">
      <Title />
      <SubstatPreference
        preferredSubstats={artifactPreference.substats}
        updateSubstatPreference={updateSubstatPreference}
      />
      <MainStatPreference />
    </div>
  );
}
