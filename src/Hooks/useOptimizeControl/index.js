import useCharacterStatControl from "./useCharacterStatControl";
import useTalentScalingControl from "./useTalentScalingControl";
import useBuffCollectionControl from "./useBuffCollectionControl";
import useBonusStatGainControl from "./useBonusStatGainControl";
import useEnemyStatControl from "./useEnemyStatControl";
import useArtifactPreferenceControl from "./useArtifactPreferenceControl";

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

  const { enemyStats, updateEnemyStat } = useEnemyStatControl();

  const {
    artifactPreference,
    updateSubstatPreference,
    updateSandsPreference,
    updateGobletPreference,
    updateCircletPreference,
  } = useArtifactPreferenceControl();

  return {
    // character
    characterStats,
    updateCharacterStats,
    // talent scaling
    talentScalings,
    addTalentScaling,
    removeTalentScaling,
    updateTalentScaling,
    // bonus stat gains
    bonusStatGains,
    addBonusStatGains,
    removeBonusStatGain,
    updateBonusStatGain,
    changeBonusStatGainName,
    // buff gains
    buffCollections,
    addBuffCollection,
    removeBuffCollection,
    changeBuffCollectionName,
    addBuffToCollection,
    removeBuffFromCollection,
    updateBuffFromCollection,
    // enemy
    enemyStats,
    updateEnemyStat,
    // artifact preference
    artifactPreference,
    updateSubstatPreference,
    updateSandsPreference,
    updateGobletPreference,
    updateCircletPreference,
  };
}
