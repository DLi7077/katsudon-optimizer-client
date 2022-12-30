import React from "react";
import Title from "./Title";
import Artifact from "./Artifact";
import { get } from "lodash";
import { LinearProgress } from "@mui/material";

const pieceIndex = ["flower", "feather", "sands", "goblet", "circlet"];

const classes = {
  artifacts: {
    display: "flex",
    justifyContent: "center",
    gap: "4rem",
    flexWrap: "wrap",
  },
  loadingBar: {
    width: "min(100%,600px)",
    height: "6px",
    backgroundColor: "black",
    borderRadius: "100px",
  },
};

export default function OptimizeResult({ optimizeResult, awaiting }) {
  const result = {
    _id: "63ae9f5c232acfc806e90ddc",
    character: {
      artifacts: [
        {
          substats: [
            {
              value: 19.45,
              rolls: 0,
              label: "Flat Attack",
            },
            {
              value: 0.0583,
              rolls: 0,
              label: "ATK %",
            },
            {
              value: 0.0648,
              rolls: 0,
              label: "Energy Recharge%",
            },
            {
              value: 0.4662,
              rolls: 5,
              label: "Crit Damage%",
            },
          ],
          main_stat: {
            value: 4780,
            rolls: 20,
            label: "Flat HP",
          },
        },
        {
          substats: [
            {
              value: 0.0583,
              rolls: 0,
              label: "ATK %",
            },
            {
              value: 23.31,
              rolls: 0,
              label: "Elemental Mastery",
            },
            {
              value: 0.0648,
              rolls: 0,
              label: "Energy Recharge%",
            },
            {
              value: 0.4662,
              rolls: 5,
              label: "Crit Damage%",
            },
          ],
          main_stat: {
            value: 311,
            rolls: 20,
            label: "Flat Attack",
          },
        },
        {
          substats: [
            {
              value: 19.45,
              rolls: 0,
              label: "Flat Attack",
            },
            {
              value: 0.0583,
              rolls: 0,
              label: "ATK %",
            },
            {
              value: 23.31,
              rolls: 0,
              label: "Elemental Mastery",
            },
            {
              value: 0.4662,
              rolls: 5,
              label: "Crit Damage%",
            },
          ],
          main_stat: {
            value: 0.518,
            rolls: 20,
            label: "Energy Recharge%",
          },
        },
        {
          substats: [
            {
              value: 19.45,
              rolls: 0,
              label: "Flat Attack",
            },
            {
              value: 0.0583,
              rolls: 0,
              label: "ATK %",
            },
            {
              value: 0.0648,
              rolls: 0,
              label: "Energy Recharge%",
            },
            {
              value: 0.4662,
              rolls: 5,
              label: "Crit Damage%",
            },
          ],
          main_stat: {
            value: 0.466,
            rolls: 20,
            label: "Electro DMG Bonus%",
          },
        },
        {
          substats: [
            {
              value: 19.45,
              rolls: 0,
              label: "Flat Attack",
            },
            {
              value: 0.3498,
              rolls: 5,
              label: "ATK %",
            },
            {
              value: 23.31,
              rolls: 0,
              label: "Elemental Mastery",
            },
            {
              value: 0.0648,
              rolls: 0,
              label: "Energy Recharge%",
            },
          ],
          main_stat: {
            value: 0.622,
            rolls: 20,
            label: "Crit Damage%",
          },
        },
      ],
      bonuses: [
        {
          source_stat: "energy_recharge",
          target_stat: "Electro DMG Bonus%",
          bonus: 0.9394,
        },
        {
          source_stat: "energy_recharge",
          target_stat: "ATK %",
          bonus: 1.2,
        },
        {
          source_stat: "energy_recharge",
          target_stat: "Other DMG Bonus%",
          bonus: 0.75,
        },
      ],
      stats: {
        damage_bonus_anemo: 0,
        crit_damage: 3.5868,
        quicken_bonus: 0,
        energy_recharge: 3.3485,
        crit_rate: 0,
        total_defense: 0,
        base_damage_bonus: 0,
        flat_hp: 4780,
        elemental_mastery: 719.93,
        damage_bonus_physical: 0,
        defense_shred: 0.6,
        damage_bonus_dendro: 0,
        damage_bonus_talent: 0,
        damage_bonus_hydro: 0,
        damage_bonus_electro: 2.2766,
        level: 90,
        total_attack: 5335.13,
        damage_bonus_pyro: 0,
        flat_defense: 0,
        damage_bonus_cryo: 0,
        damage_bonus_all: 1.02,
        flat_attack: 1494.33,
        total_hp: 17687,
      },
    },
    analysis: {
      base_damage: 71880.2,
      base_damage_bonus: 4780.95,
      multipliers: 19.7076,
      dmg_reduced_percent: 0.78125,
      resistance_multiplier: 1.6,
      melt_vap_multiplier: 1,
      damage_output: 1888510,
    },
    created_at: "2022-12-30T08:20:44.860Z",
    request: "63ae9f54232acfc806e90dce",
    __v: 0,
  };

  // const { character, analysis } = optimizeResult;
  // const { artifacts, bonuses, stats } = character;

  return (
    <div className="optimize-section result-part">
      <Title />
      {!!awaiting && <LinearProgress style={classes.loadingBar} />}
      {!!optimizeResult && (
        <div style={classes.artifacts}>
          {get(optimizeResult, "character.artifacts").map((artifact, idx) => {
            const piece = pieceIndex[idx];
            return (
              <Artifact
                key={`optimized-${piece}`}
                piece={piece}
                substats={artifact.substats}
                mainstat={artifact.main_stat}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
