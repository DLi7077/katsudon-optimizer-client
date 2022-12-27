import React, { Fragment } from "react";
import BoxContainer from "../../../Components/BoxContainer";
import "../styles.css";
import FormRow from "../../../Components/LabelInput/FormRow";
import { map } from "lodash";
import DropdownSelect from "../../../Components/DropdownSelect";
import { FINAL_STATS } from "../../../Constants/stats";
import NumberInput from "../../../Components/LabelInput/NumberInput";
import CloseButton from "../../../Components/Buttons/CloseButton";
import { Typography } from "@mui/material";
import AddButton from "../../../Components/Buttons/AddButton";
import Separater from "../../../Components/Separater";

export default function TalentScalings(props) {
  return (
    <BoxContainer
      style={{ backgroundColor: props.characterBackgroundColor ?? "#606060" }}
      header={
        <Typography style={{ fontSize: "1.125rem" }}>Talent Scaling</Typography>
      }>
      <div className="align-down-center">
        {map(props.talentScalings, (talentScaling, index) => {
          const { talent_stat, talent_percent } = talentScaling;
          return (
            <Fragment key={`talent-scaling-${index}`}>
              <div
                className="align-down-center"
                style={{ position: "relative", paddingBottom: "0.5rem" }}>
                <FormRow>
                  <span>Scaling Stat</span>
                  <DropdownSelect
                    options={FINAL_STATS}
                    value={talent_stat}
                    onChange={(e) => {
                      const updatedStat = e.target.value;
                      console.log(updatedStat);
                      props.updateTalentScaling(
                        index,
                        updatedStat,
                        talent_percent
                      );
                    }}
                  />
                </FormRow>
                <FormRow key={`talent-scaling-${index}`}>
                  <span>Scaling Percent%</span>
                  <NumberInput
                    value={talent_percent}
                    style={{ width: "41%" }}
                  />
                </FormRow>
                <CloseButton
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "-8%",
                    transform: "translate(0,-50%)",
                  }}
                  onClick={() => {
                    props.removeTalentScaling(index);
                  }}
                />
              </div>
              <Separater />
            </Fragment>
          );
        })}
        <AddButton
          onClick={() => {
            props.addTalentScaling();
          }}
        />
      </div>
    </BoxContainer>
  );
}
