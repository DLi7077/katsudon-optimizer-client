import { Typography } from "@mui/material";
import BoxContainer from "../../../Components/BoxContainer";
import FormRow from "../../../Components/LabelInput/FormRow";
import NumberInput from "../../../Components/LabelInput/NumberInput";
import ElementList from "../../../Components/Elements/ElementList";
import { AFFECTED_ELEMENTS, ELEMENT_BORDER } from "../../../Constants/elements";

export default function Enemy(props) {
  const {
    level,
    affected_element,
    resistance_to_damage_element,
    defense_percent_dropped,
  } = props.enemyStats;

  return (
    <BoxContainer
      style={{ backgroundColor: props.enemyBackgroundColor }}
      header={<Typography style={{ fontSize: "1.125rem" }}>Enemy</Typography>}>
      <div className="align-down-center">
        <span>Affected Element:</span>
        <ElementList
          element={affected_element}
          elementList={AFFECTED_ELEMENTS}
          update={(element) => {
            props.updateEnemyStat("affected_element", element);
            props.setEnemyBackgroundColor(element);
          }}
          style={{
            marginTop: "0.25rem",
            marginBottom: "0.5rem",
            padding: "0.17rem",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
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
            }}
          />
        </FormRow>
        <FormRow>
          <span>
            <span
              style={{ color: ELEMENT_BORDER[props.incomingDamageElement] }}>
              {props.incomingDamageElement}
            </span>{" "}
            Resistance%
          </span>
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
            }}
          />
        </FormRow>
      </div>
    </BoxContainer>
  );
}
