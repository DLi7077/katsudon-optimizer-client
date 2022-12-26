import { get, map } from "lodash";
import DropdownSelect from "../../../Components/DropdownSelect";
import { BUFFABLE_STATS } from "../../../Constants/buffs";
import LabelInput from "../../../Components/LabelInput";
import "./styles.css";
import BoxContainer from "../../../Components/BoxContainer";
import CloseButton from "../../../Components/Buttons/CloseButton";
import AddButton from "../../../Components/Buttons/AddButton";
import TextInput from "../../../Components/LabelInput/TextInput";
import Separater from "../../../Components/Separater";

export default function BuffCollection(props) {
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
            console.log(stat);
            console.log(props.collection.buffs[index]);
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
                  props.removeBuff(props.collectionIndex, index);
                }}
              />
            </div>
          );
        })}
        <Separater />
        <AddButton
          onClick={() => {
            console.log("add");
            props.addBuff(props.collectionIndex);
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
