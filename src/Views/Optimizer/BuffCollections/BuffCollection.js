import { get, map } from "lodash";
import DropdownSelect from "../../../Components/DropdownSelect";
import { BUFFABLE_STATS } from "../../../Constants/buffs";
import LabelInput from "../../../Components/LabelInput";
import "./styles.css";
import { IconButton, Typography } from "@mui/material";
import BoxContainer from "../../../Components/BoxContainer";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import NewBuffForm from "./NewBuffForm";
import CloseButton from "../../../Components/Buttons/CloseButton";
import AddButton from "../../../Components/Buttons/AddButton";
import TextInput from "../../../Components/LabelInput/TextInput";

const classes = {
  addBuffButton: {
    padding: 0,
    color: "white",
  },
};

function Separator() {
  return (
    <div
      style={{
        height: "1px",
        backgroundColor: "white",
        marginTop: "0.75rem",
        marginBottom: "0.5rem",
      }}
    />
  );
}

export default function BuffCollection(props) {
  // function Header() {
  //   function changeName(name) {
  //     props.changeName(props.collectionIndex, name);
  //   }
  //   return (

  //     // <Typography style={{ fontSize: "1.125rem" }}>
  //     //   {get(props.collection, "name")}
  //     // </Typography>
  //   );
  // }
  function addBuff(stat, amount) {
    props.addBuff(props.collectionIndex, stat, amount);
  }
  function removeBuff(index) {
    props.removeBuff(props.collectionIndex, index);
  }

  const [newBuffs, setNewBuffs] = useState([]);

  function removeBuffForm(index) {
    const updatedBuffForms = newBuffs.filter((_, idx) => idx !== index);
    console.log(updatedBuffForms);
    setNewBuffs(updatedBuffForms);
  }

  return (
    <div style={{ position: "relative", width: "fit-content" }}>
      <BoxContainer
        header={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}>
            <TextInput
              value={get(props.collection, "name")}
              onChange={(e) => {
                const updatedName = e.target.value;
                props.changeName(props.collectionIndex, updatedName);
              }}
            />
          </div>
        }
        style={{ backgroundColor: "#606060" }}>
        {map(get(props.collection, "buffs"), (buff, index) => {
          const { bonus_stat, bonus_amount } = buff;
          function updateBuffStat(stat) {
            props.updateBuff(props.collectionIndex, index, stat, bonus_amount);
          }
          function updateBuffAmount(amount) {
            props.updateBuff(props.collectionIndex, index, bonus_stat, amount);
          }

          return (
            <div style={{ position: "relative" }}>
              <LabelInput
                key={`buff-${props.collectionIndex}-${index}`}
                label={
                  <DropdownSelect
                    options={BUFFABLE_STATS}
                    value={bonus_stat}
                    onChange={(e) => {
                      updateBuffStat(e.target.value);
                    }}
                  />
                }
                value={bonus_amount}
                onChange={(e) => {
                  const updatedValue = parseFloat(e.target.value);
                  updateBuffAmount(isNaN(updatedValue) ? 0 : updatedValue);
                }}
              />
              <CloseButton
                style={{
                  position: "absolute",
                  left: "-2%",
                  top: "50%",
                  transform: "translate(-50%,-50%)",
                  padding: "2px",
                }}
                onClick={() => {
                  removeBuff(index);
                }}
              />
            </div>
          );
        })}
        <Separator />
        {map(newBuffs, (buff, index) => {
          return (
            <NewBuffForm
              key={`${props.collectionIndex}-${index}-form`}
              formIndex={index}
              createBuff={addBuff}
              buff={buff}
              onDelete={removeBuffForm}
              onUpdate={(stat, amount) => {
                const updatedForm = [...newBuffs];
                updatedForm[index].bonus_stat = stat;
                updatedForm[index].bonus_amount = amount;
                setNewBuffs(updatedForm);
              }}
            />
          );
        })}
        <AddButton
          onClick={() => {
            setNewBuffs([
              ...newBuffs,
              {
                bonus_stat: "",
                bonus_amount: 0,
              },
            ]);
          }}
        />
      </BoxContainer>
      <CloseButton
        style={{ position: "absolute", top: 0, right: 0 }}
        onClick={() => {
          props.removeCollection(props.collectionIndex);
        }}
      />
    </div>
  );
}
