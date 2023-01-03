export function timeGapMS(dateA, dateB) {
  const diffMS = Math.abs(dateB - dateA);
  return diffMS;
}