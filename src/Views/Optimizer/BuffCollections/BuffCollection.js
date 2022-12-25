import { get, map } from "lodash";
import DropdownSelect from "../../../Components/DropdownSelect";
import { BUFFABLE_STATS } from "../../../Constants/buffs";
import LabelInput from "../../../Components/LabelInput";
import "./styles.css";
import { Typography } from "@mui/material";

export default function BuffCollection(props) {
  function Header (){
    return <Typography></Typography>
  }
  return (
    <div className="buff-container">
      {get(props.collection, "name")}
      <div>
        {map(get(props.collection, "buffs"), (buff, index) => {
          const { bonus_stat, bonus_amount } = buff;
          function updateBuffStat(stat) {
            props.updateBuff(index, stat, bonus_amount);
          }
          function updateBuffAmount(amount) {
            props.updateBuff(index, bonus_stat, amount);
          }

          return (
            <LabelInput
              label={
                <DropdownSelect
                  options={BUFFABLE_STATS}
                  value={bonus_stat}
                  updateBuff={updateBuffStat}
                />
              }
              value={bonus_amount}
              updateStat={(e) => {
                const updatedValue = parseFloat(e.target.value);
                updateBuffAmount(isNaN(updatedValue) ? 0 : updatedValue);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
