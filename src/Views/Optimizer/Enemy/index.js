import { Typography } from "@mui/material";
import BoxContainer from "../../../Components/BoxContainer";
import FormRow from "../../../Components/LabelInput/FormRow";
import NumberInput from "../../../Components/LabelInput/NumberInput";
import ElementList from "../../../Components/Elements/ElementList";
import { AFFECTED_ELEMENTS } from "../../../Constants/elements";

export default function Enemy(props) {
  const {
    level,
    affected_element,
    resistance_to_damage_element,
    defense_percent_dropped,
  } = props.enemyStats;
  return (
    <BoxContainer
      header={<Typography style={{ fontSize: "1.125rem" }}>Enemy</Typography>}>
      <div className="align-down-center">
        <span>Affected Element:</span>
        <ElementList
          element={affected_element}
          elementList={AFFECTED_ELEMENTS}
          update={(element) => {
            props.updateEnemyStat("affected_element", element);
          }}
          style={{ marginTop: "0.25rem", marginBottom: "1rem" }}
        />
        <FormRow>
          <span>Level</span>
          <NumberInput
            value={level}
            style={{ width: "50px" }}
            textDir="right"
            onChange={(e) => {
              const updatedValue = parseFloat(e.target.value);
              props.updateEnemyStat(
                "level",
                isNaN(updatedValue) ? 0 : updatedValue
              );
              console.log(props.enemyStats);
            }}
          />
        </FormRow>
        <FormRow>
          <span> Elemental Resistance%</span>
          <NumberInput
            value={resistance_to_damage_element}
            style={{ width: "50px" }}
            textDir="right"
            onChange={(e) => {
              const updatedValue = parseFloat(e.target.value);
              props.updateEnemyStat(
                "resistance_to_damage_element",
                isNaN(updatedValue) ? 0 : updatedValue
              );
            }}
          />
        </FormRow>
        <FormRow>
          <span>Defense Dropped%</span>
          <NumberInput
            value={defense_percent_dropped}
            style={{ width: "50px" }}
            textDir="right"
            onChange={(e) => {
              const updatedValue = parseFloat(e.target.value);
              props.updateEnemyStat(
                "defense_percent_dropped",
                isNaN(updatedValue) ? 0 : updatedValue
              );
              console.log(props.enemyStats);
            }}
          />
        </FormRow>
      </div>
    </BoxContainer>
  );
}
