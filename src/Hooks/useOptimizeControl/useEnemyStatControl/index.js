import { useState } from "react";

export default function useEnemyStatControl() {
  const [enemyStats, setEnemyStats] = useState({
    level: 90,
    affected_element: "Electro", // todo: add none element to backend
    incoming_damage_element: "Electro", // to be replaced with Character element
    resistance_to_damage_element: -30,
    defense_percent_dropped: 0,
  });

  function updateEnemyStat(key,value){
    const updatedStats = { ...enemyStats, [key]: value };
    setEnemyStats(updatedStats);
  }

  return {
    enemyStats,
    updateEnemyStat
  };
}
