export default function createBonusStatGain() {
  return {
    source_stat: "",
    target_stat: "",
    source_offset: 0, // divide by 100 if target stat is percentage on parse
    percent_gain: 0, // divide by 100 on parse
    max_gain: 0, // divide by 100 is target stat is percentage on parse
  };
}
