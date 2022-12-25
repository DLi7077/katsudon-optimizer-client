import React from "react";
import LabelInput from "../LabelInput";
import { INITIAL_CHARACTER_STATS } from "../../Constants/Initial/character";
import { map } from "lodash";
import useObjectForm from "../../Hooks/useObjectForm";

export default function Character() {
  const [characterStats, setCharacterStats] = useObjectForm(
    map(INITIAL_CHARACTER_STATS, (stats) => stats.value)
  );

  return (
    <div>
      {map(INITIAL_CHARACTER_STATS, (statAttributes, idx) => {
        const { label, value } = statAttributes;
        return (
          <LabelInput
            key={idx}
            label={label}
            value={characterStats[value]}
            updateStat={(e) => {
              const updatedValue = parseFloat(e.target.value);
              setCharacterStats({ ...characterStats, [value]: updatedValue });
            }}
          />
        );
      })}
    </div>
  );
}
