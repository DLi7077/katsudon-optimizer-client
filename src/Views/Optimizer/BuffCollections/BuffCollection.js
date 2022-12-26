import { get, map } from "lodash";
import DropdownSelect from "../../../Components/DropdownSelect";
import { BUFFABLE_STATS } from "../../../Constants/buffs";
import LabelInput from "../../../Components/LabelInput";
import "./styles.css";
import BoxContainer from "../../../Components/BoxContainer";
import { useState } from "react";
import NewBuffForm from "./NewBuffForm";
import CloseButton from "../../../Components/Buttons/CloseButton";
import AddButton from "../../../Components/Buttons/AddButton";
import TextInput from "../../../Components/LabelInput/TextInput";
import Separater from "../../../Components/Separater";

export default function BuffCollection(props) {
  function addBuff(stat, amount) {
    props.addBuff(props.collectionIndex, stat, amount);
  }
  function removeBuff(index) {
    props.removeBuff(props.collectionIndex, index);
  }

  const [newBuffs, setNewBuffs] = useState([]);

  function removeBuffForm(index) {
    const updatedBuffForms = newBuffs.filter((_, idx) => idx !== index);
    setNewBuffs(updatedBuffForms);
  }

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
              value={get(props.collection, "name")}
              placeholder="Buff Name"
              onChange={(e) => {
                const updatedName = e.target.value;
                props.changeName(props.collectionIndex, updatedName);
              }}
            />
          </div>
        }>
        {map(get(props.collection, "buffs"), (buff, index) => {
          const { bonus_stat, bonus_amount } = buff;
          function updateBuffStat(stat) {
            props.updateBuff(props.collectionIndex, index, stat, bonus_amount);
          }
          function updateBuffAmount(amount) {
            props.updateBuff(props.collectionIndex, index, bonus_stat, amount);
          }

          return (
            <div
              style={{ position: "relative" }}
              key={`buff-${props.collectionIndex}-${index}`}>
              <LabelInput
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
                  left: "-5%",
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
        <Separater />
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
