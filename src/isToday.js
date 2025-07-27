import { isSameDay } from "./isSameDay.js";

export function isToday(date) {
  return isSameDay(new Date(), date);
}
