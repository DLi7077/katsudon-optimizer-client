import { useState } from "react";

const DEFAULT_ENEMY_STATS = {
  level: 90,
  affected_element: "None", // todo: add none element to backend
  incoming_damage_element: "Pyro", // to be replaced with Character element
  resistance_to_damage_element: -30,
  defense_percent_dropped: 0,
};

export default function useEnemyStatControl() {
  const savedEnemy = {
    ...DEFAULT_ENEMY_STATS,
    ...(!!localStorage.getItem("enemy-stats")
      ? JSON.parse(localStorage.getItem("enemy-stats"))
      : {}),
  };
  const [enemyStats, setEnemyStats] = useState(savedEnemy);

  function updateEnemyStat(key, value) {
    const updatedStats = { ...enemyStats, [key]: value };
    setEnemyStats(updatedStats);
  }

  return {
    enemyStats,
    updateEnemyStat,
  };
}
