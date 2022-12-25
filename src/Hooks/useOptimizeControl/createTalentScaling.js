import { isFinalStat } from "../../Utils/validate";

export default function createTalentScaling(stat, percent) {
  if (!isFinalStat(stat)) {
    console.error(stat, "is not a final stat");
    return {};
  }

  return {
    talent_stat: stat,
    talent_percent: percent,
  };
}
