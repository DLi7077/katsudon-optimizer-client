import useCharacterStatControl from "./useCharacterStatControl";
import useTalentScalingControl from "./useTalentScalingControl";
import useBuffCollectionControl from "./useBuffCollectionControl";
import useBonusStatGainControl from "./useBonusStatGainControl";

export default function useOptimizeControl() {
  const { characterStats, updateCharacterStats } = useCharacterStatControl();
  const {
    talentScalings,
    addTalentScaling,
    removeTalentScaling,
    updateTalentScaling,
  } = useTalentScalingControl();

  const {
    buffCollections,
    changeBuffCollectionName,
    addBuffCollection,
    addBuffToCollection,
    removeBuffCollection,
    removeBuffFromCollection,
    updateBuffFromCollection,
  } = useBuffCollectionControl();

  const {
    bonusStatGains,
    addBonusStatGains,
    removeBonusStatGain,
    updateBonusStatGain,
    changeBonusStatGainName,
  } = useBonusStatGainControl();

  return {
    characterStats,
    talentScalings,
    bonusStatGains,
    buffCollections,
    updateCharacterStats,
    addTalentScaling,
    removeTalentScaling,
    updateTalentScaling,
    addBonusStatGains,
    removeBonusStatGain,
    updateBonusStatGain,
    changeBonusStatGainName,
    changeBuffCollectionName,
    addBuffCollection,
    removeBuffCollection,
    addBuffToCollection,
    removeBuffFromCollection,
    updateBuffFromCollection,
  };
}
