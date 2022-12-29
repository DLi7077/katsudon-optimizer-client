import { map } from "lodash";
import AddButton from "../../../Components/Buttons/AddButton";
import BonusStatGain from "./BonusStatGain";

export default function BonusStatGains(props) {
  return (
    <div className="align-down-center" style={{ gap: "1rem" }}>
      <div className="align-horizontal-center" style={{ gap: "1rem" }}>
        <div className="section-title">
          <span style={{ marginRight: "1rem" }}>Bonus Stat Gains</span>
          <AddButton
            style={{ fontSize: "1.25rem" }}
            onClick={() => {
              props.addBonusStatGains();
            }}
          />
        </div>
      </div>
      <div className="align-down-center" style={{ gap: "2rem" }}>
        {map(props.bonusStatGains, (bonusStatGain, index) => {
          return (
            <BonusStatGain
              key={`bonus-stat-gain-${index}`}
              bonusGain={bonusStatGain}
              bonusIndex={index}
              addBonusGain={props.addBonusStatGains}
              removeBonusGain={props.removeBonusStatGain}
              updateBonusGain={props.updateBonusStatGain}
              changeName={props.changeBonusStatGainName}
            />
          );
        })}
      </div>
    </div>
  );
}
