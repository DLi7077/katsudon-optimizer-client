import React from "react";
import FormRow from "../../../Components/LabelInput/FormRow";
import TextInput from "../../../Components/LabelInput/TextInput";
import DropdownSelect from "../../../Components/DropdownSelect";
import { FINAL_STATS, BONUS_STATS } from "../../../Constants/stats";
import BoxContainer from "../../../Components/BoxContainer";
import NumberInput from "../../../Components/LabelInput/NumberInput";
import CloseButton from "../../../Components/Buttons/CloseButton";
import { isPercentageStat } from "../../../Utils/validate";
import { STAT_LABEL } from "../../../Constants/labels";

const classes = {
  numberField: {
    width: "48%",
    marginTop: "5px",
    marginBottom: "5px",
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

  return (
    <div style={{ position: "relative", width: "350px" }}>
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
            <span>Source Stat</span>
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
            <span>Target Stat</span>
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
            <span>{`Source Offset${
              isPercentageStat(STAT_LABEL[source_stat]) ? "%" : ""
            }`}</span>
            <NumberInput
              value={source_offset}
              textDir="right"
              style={classes.numberField}
              onChange={(e) => {
                const updatedValue = parseFloat(e.target.value);
                updateBonusGain(
                  "source_offset",
                  isNaN(updatedValue) ? 0 : updatedValue
                );
              }}
            />
          </FormRow>
          <FormRow>
            <span>Percent Gain</span>
            <NumberInput
              value={percent_gain}
              type="number"
              textDir="right"
              style={classes.numberField}
              onChange={(e) => {
                const updatedValue = parseFloat(e.target.value);
                updateBonusGain(
                  "percent_gain",
                  isNaN(updatedValue) ? 0 : updatedValue
                );
              }}
            />
          </FormRow>
          <FormRow>
            <span>Maximum Bonus</span>
            <NumberInput
              value={max_gain}
              type="number"
              textDir="right"
              style={classes.numberField}
              onChange={(e) => {
                const updatedValue = parseFloat(e.target.value);
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
