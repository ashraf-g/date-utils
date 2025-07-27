export function formatDate(date, options = {}) {
  const formatter = new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    ...options,
  });
  return formatter.format(new Date(date));
}
