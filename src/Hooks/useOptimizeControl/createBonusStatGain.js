import { isBonusStat, isFinalStat } from "../../Utils/validate";

export default function createBonusStatGain(
  source,
  target,
  offset,
  percentGain,
  maxGain
) {
  if (!isFinalStat(source)) {
    console.error(source, " is not a final stat");
    return {};
  }
  if (!isBonusStat(target)) {
    console.error(source, " is not a final stat");
    return {};
  }

  return {
    source_stat: source,
    target_stat: target,
    source_offset: offset, // divide by 100 if target stat is percentage on parse
    percent_gain: percentGain, // divide by 100 on parse
    max_gain: maxGain, // divide by 100 is target stat is percentage on parse
  };
}
