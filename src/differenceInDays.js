export function differenceInDays(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  d1.setHours(0, 0, 0, 0);
  d2.setHours(0, 0, 0, 0);
  const diffMs = d2 - d1;
  return Math.round(diffMs / (1000 * 60 * 60 * 24));
}
