import React from "react";
import "./styles.css";
import FormRow from "../../../Components/LabelInput/FormRow";
import TextInput from "../../../Components/LabelInput/TextInput";
import DropdownSelect from "../../../Components/DropdownSelect";
import { FINAL_STATS, BONUS_STATS } from "../../../Constants/stats";
import BoxContainer from "../../../Components/BoxContainer";
import NumberInput from "../../../Components/LabelInput/NumberInput";
import CloseButton from "../../../Components/Buttons/CloseButton";

const classes = {
  label: {
    width: "40%",
  },
};

export default function BonusStatGain(props) {
  function updateBonusGain(field, value) {
    props.updateBonusGain(props.bonusIndex, field, value);
  }
  const {
    name,
    source_stat,
    target_stat,
    source_offset,
    percent_gain,
    max_gain,
  } = props.bonusGain;

  const numberFieldHeight = 36;
  return (
    <div style={{ position: "relative", width: "fit-content" }}>
      <BoxContainer
        style={{ backgroundColor: "#606060" }}
        header={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}>
            <TextInput
              value={name}
              placeholder="Buff Name"
              onChange={(e) => {
                const updatedName = e.target.value;
                props.changeName(props.bonusIndex, updatedName);
              }}
            />
          </div>
        }>
        <div className="align-down-center">
          <FormRow>
            <span style={classes.label}>Source Stat</span>
            <DropdownSelect
              options={FINAL_STATS}
              value={source_stat}
              onChange={(e) => {
                const updatedStat = e.target.value;
                updateBonusGain("source_stat", updatedStat);
              }}
            />
          </FormRow>
          <FormRow>
            <span style={classes.label}>Target Stat</span>
            <DropdownSelect
              options={BONUS_STATS}
              value={target_stat}
              onChange={(e) => {
                const updatedStat = e.target.value;
                updateBonusGain("target_stat", updatedStat);
              }}
            />
          </FormRow>
          <FormRow>
            <span style={classes.label}>Source Offset</span>
            <NumberInput
              value={source_offset}
              textDir="right"
              style={{ width: "30%", height: `${numberFieldHeight}px` }}
              onChange={(e) => {
                const updatedValue = e.target.value;
                updateBonusGain(
                  "source_offset",
                  isNaN(updatedValue) ? 0 : updatedValue
                );
              }}
            />
          </FormRow>
          <FormRow>
            <span style={classes.label}>Percent Gain</span>
            <NumberInput
              value={percent_gain}
              type="number"
              textDir="right"
              style={{ width: "30%", height: `${numberFieldHeight}px` }}
              onChange={(e) => {
                const updatedValue = e.target.value;
                updateBonusGain(
                  "percent_gain",
                  isNaN(updatedValue) ? 0 : updatedValue
                );
              }}
            />
          </FormRow>
          <FormRow>
            <span style={classes.label}>Maximum Bonus</span>
            <NumberInput
              value={max_gain}
              type="number"
              textDir="right"
              style={{ width: "30%", height: `${numberFieldHeight}px` }}
              onChange={(e) => {
                const updatedValue = e.target.value;
                updateBonusGain(
                  "max_gain",
                  isNaN(updatedValue) ? 0 : updatedValue
                );
              }}
            />
          </FormRow>
        </div>
      </BoxContainer>

      <CloseButton
        style={{ position: "absolute", top: 0, right: 0 }}
        onClick={() => {
          props.removeBonusGain(props.bonusIndex);
        }}
      />
    </div>
  );
}
