import React from "react";
import Artifact from "./Artifact";
import { get, map } from "lodash";
import { LinearProgress } from "@mui/material";
import {
  PENDING_LOAD_COLOR,
  PROCESSING_LOAD_COLOR,
} from "../../../Constants/colors";

const pieceIndex = ["flower", "feather", "sands", "goblet", "circlet"];

const classes = {
  artifacts: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    flexWrap: "wrap",
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
  title: {
    fontSize: "1.5rem",
  },
  subtitle: {
    fontSize: "1.25rem",
  },
  loadingBar: {
    width: "min(100%,600px)",
    height: "4px",
    backgroundColor: "black",
    borderRadius: "100px",
    "& .MuiLinearProgress-bar": {
      backgroundColor: "white",
    },
  },
  pending: {
    "& .MuiLinearProgress-bar": {
      backgroundColor: PENDING_LOAD_COLOR,
    },
  },
  processing: {
    "& .MuiLinearProgress-bar": {
      backgroundColor: PROCESSING_LOAD_COLOR,
    },
  },
};

export default function OptimizeResult({
  scrollRef,
  optimizeResult,
  awaiting,
  damageColor,
  requestStatus,
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
    <div className="optimize-section result-part" ref={scrollRef}>
      {!!awaiting && (
        <div
          className="align-down-center"
          style={{
            gap: "1rem",
            width: "100%",
          }}>
          <LinearProgress
            sx={{
              ...classes.loadingBar,
              ...(requestStatus === "pending" ? classes.pending : {}),
              ...(requestStatus === "processing" ? classes.processing : {}),
            }}
          />
          <div>{requestStatus === "pending" ? "Pending..." : ""}</div>
          <div>
            {requestStatus === "processing"
              ? "Processing... (this might take a minute)"
              : ""}
          </div>
        </div>
      )}
      {!awaiting && !optimizeResult && (
        <div> Something went wrong... try it again</div>
      )}
      {!awaiting && !!optimizeResult && (
        <>
          <div style={classes.groupContainer}>
            <span style={classes.title}>
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
              <br />
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
