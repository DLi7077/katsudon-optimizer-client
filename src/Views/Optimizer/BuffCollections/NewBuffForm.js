import LabelInput from "../../../Components/LabelInput";
import DropdownSelect from "../../../Components/DropdownSelect";
import { BUFFABLE_STATS } from "../../../Constants/buffs";
import CloseButton from "../../../Components/Buttons/CloseButton";
import CheckButton from "../../../Components/Buttons/CheckButton";

export default function NewBuffForm({
  formIndex,
  buff,
  createBuff,
  onDelete,
  onUpdate,
}) {
  const { bonus_stat, bonus_amount } = buff;
  return (
    <div style={{ position: "relative" }}>
      <LabelInput
        label={
          <DropdownSelect
            options={BUFFABLE_STATS}
            value={bonus_stat}
            onChange={(e) => {
              const updatedBuff = e.target.value;
              onUpdate(updatedBuff, bonus_amount);
            }}
          />
        }
        value={bonus_amount}
        onChange={(e) => {
          const updatedStat = parseFloat(e.target.value);
          onUpdate(bonus_stat, isNaN(updatedStat) ? 0 : updatedStat);
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
          onDelete(formIndex);
        }}
      />
      <CheckButton
        style={{
          position: "absolute",
          right: "-9%",
          top: "50%",
          transform: "translate(0,-50%)",
          padding: "2px",
        }}
        onClick={() => {
          if (!bonus_stat) {
            console.error("stat not selected");
            return;
          }

          createBuff(bonus_stat, bonus_amount);
          onDelete(formIndex);
        }}
      />
    </div>
  );
}
