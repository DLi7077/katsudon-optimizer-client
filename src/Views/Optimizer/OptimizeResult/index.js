import React from "react";
import Title from "./Title";
import Artifact from "./Artifact";
import { get, map } from "lodash";
import { LinearProgress } from "@mui/material";

const pieceIndex = ["flower", "feather", "sands", "goblet", "circlet"];

const classes = {
  artifacts: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    flexWrap: "wrap",
  },
  loadingBar: {
    width: "min(100%,600px)",
    height: "6px",
    backgroundColor: "black",
    borderRadius: "100px",
  },
  finalStatContainer: {
    backgroundColor: "black",
    padding: "0.5rem",
    border: "1px solid white",
    columnCount: 2,
  },
  finalStat: {
    fontSize: "0.8rem",
    width: "fit-content",
  },
  groupContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: "1rem",
  },
  subtitle: {
    fontSize: "1.25rem",
  },
};

export default function OptimizeResult({
  optimizeResult,
  awaiting,
  damageColor,
}) {
  const finalStats = [
    "level",
    "total_attack",
    "total_hp",
    "total_defense",
    "energy_recharge",
    "elemental_mastery",
    "crit_rate",
    "crit_damage",
    "base_damage_bonus",
    "damage_bonus_anemo",
    "damage_bonus_cryo",
    "damage_bonus_dendro",
    "damage_bonus_electro",
    "damage_bonus_hydro",
    "damage_bonus_physical",
    "damage_bonus_pyro",
    "damage_bonus_talent",
    "damage_bonus_all",
    "defense_shred",
    "quicken_bonus",
  ];

  return (
    <div className="optimize-section result-part">
      <Title />
      {!!awaiting && <LinearProgress style={classes.loadingBar} />}
      {!!optimizeResult && (
        <>
          <div style={classes.groupContainer}>
            <span style={classes.subtitle}>
              Damage Ceiling :
              <span style={{ color: damageColor }}>
                {" "}
                {get(optimizeResult, `analysis.damage_output`)}
              </span>
            </span>
            <span style={classes.subtitle}>Optimized Artifacts</span>
            <div style={classes.artifacts}>
              {get(optimizeResult, "character.artifacts").map(
                (artifact, idx) => {
                  const piece = pieceIndex[idx];
                  return (
                    <Artifact
                      key={`optimized-${piece}`}
                      piece={piece}
                      substats={artifact.substats}
                      mainstat={artifact.main_stat}
                    />
                  );
                }
              )}
            </div>
          </div>
          <div style={classes.groupContainer}>
            <span style={classes.subtitle}>Final Stats</span>
            <div style={classes.finalStatContainer}>
              {finalStats.map((stat) => {
                return (
                  <div key={`final-stat-${stat}`} style={classes.finalStat}>
                    {stat} : {get(optimizeResult, `character.stats.${stat}`)}
                  </div>
                );
              })}
            </div>
            <div style={classes.finalStatContainer}>
              {map(get(optimizeResult, `analysis`), (value, stat) => {
                return (
                  <div
                    key={`optimize-analysis-${stat}`}
                    style={classes.finalStat}>
                    {stat} : {value}
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
