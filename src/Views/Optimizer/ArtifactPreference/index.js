import React from "react";
import SubstatPreference from "./SubstatPreference";
import "../styles.css";
import Title from "./Title";
import MainStatPreference from "./MainStatPreference";

export default function ArtifactPreference(props) {
  const {
    artifactPreference,
    updateSubstatPreference,
    updateSandsPreference,
    updateGobletPreference,
    updateCircletPreference,
  } = props;

  return (
    <div className="optimize-section artifact-part">
      <Title />
      <SubstatPreference
        preferredSubstats={artifactPreference.substats}
        updateSubstatPreference={updateSubstatPreference}
      />
      <MainStatPreference
        flowerMainStats={artifactPreference.flower_main_stats}
        featherMainStats={artifactPreference.feather_main_stats}
        sandsMainStats={artifactPreference.sands_main_stats}
        gobletMainStats={artifactPreference.goblet_main_stats}
        circletMainStats={artifactPreference.circlet_main_stats}
        updateSandsPreference={updateSandsPreference}
        updateGobletPreference={updateGobletPreference}
        updateCircletPreference={updateCircletPreference}
      />
      {props.children}
    </div>
  );
}
