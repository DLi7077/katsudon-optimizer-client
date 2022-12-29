import { useState } from "react";
import _ from "lodash";

const DEFAULT_PREFERENCES = {
  substats: [
    "Flat Attack",
    "ATK %",
    "Elemental Mastery",
    "Energy Recharge%",
    "Crit Damage",
  ],
  flower_main_stats: ["Flat HP"],
  feather_main_stats: ["Flat Attack"],
  sands_main_stats: ["ATK %", "Energy Recharge%"],
  goblet_main_stats: ["Electro DMG Bonus%", "ATK %"],
  circlet_main_stats: ["ATK %", "Crit Damage"],
};

export default function useArtifactPreferenceControl() {
  const [artifactPreference, setArtifactPreference] = useState({
    substats: [], // >=5
    flower_main_stats: ["Flat HP"], // immutable
    feather_main_stats: ["Flat Attack"], // immutable
    sands_main_stats: ["ATK %"], // >=1
    goblet_main_stats: ["Pyro DMG Bonus%"], // >=1
    circlet_main_stats: ["Crit Damage"], // >=1
  });

  // substatList is an array of stat objects with keys: label, value, selected
  function updateSubstatPreference(substatList) {
    const updatedArtifactPreference = { ...artifactPreference };
    updatedArtifactPreference.substats = chain(substatList)
      .filter((stat) => !!stat.selected)
      .map((stat) => stat.value)
      .value();

    setArtifactPreference(updatedArtifactPreference);
  }

  function updateSandsPreference(mainStatList) {
    const updatedArtifactPreference = { ...artifactPreference };
    updatedArtifactPreference.sands_main_stats = chain(mainStatList)
      .filter((stat) => !!stat.selected)
      .map((stat) => stat.value)
      .value();

    setArtifactPreference(updatedArtifactPreference);
  }

  function updateGobletPreference(mainStatList) {
    const updatedArtifactPreference = { ...artifactPreference };
    updatedArtifactPreference.goblet_main_stats = chain(mainStatList)
      .filter((stat) => !!stat.selected)
      .map((stat) => stat.value)
      .value();

    setArtifactPreference(updatedArtifactPreference);
  }

  function updateCircletPreference(mainStatList) {
    const updatedArtifactPreference = { ...artifactPreference };
    updatedArtifactPreference.circlet_main_stats = chain(mainStatList)
      .filter((stat) => !!stat.selected)
      .map((stat) => stat.value)
      .value();

    setArtifactPreference(updatedArtifactPreference);
  }

  return {
    artifactPreference,
    updateSubstatPreference,
    updateSandsPreference,
    updateGobletPreference,
    updateCircletPreference,
  };
}
