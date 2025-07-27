# 🗓️ light-date-utils

A lightweight, dependency-free JavaScript utility library for common date operations — using native `Date` and `Intl.DateTimeFormat`. Perfect for apps that want **fast, minimal** date utilities without pulling in heavy libraries like `moment` or `dayjs`.

---

## 📦 Features

- addDays(date, days)

- getStartOfWeek(date, weekStartsOn = 0)

- formatDate(date, options?)

- isToday(date)

- isSameDay(date1, date2)

- differenceInDays(date1, date2)

---

## 🚀 Installation

```bash
npm install light-date-utils

or

yarn add light-date-utils

```

---

## 🔧 Usage

```bash
import {
  addDays,
  getStartOfWeek,
  formatDate,
  isToday,
  isSameDay,
  differenceInDays,
} from 'light-date-utils';

const today = new Date();
const tomorrow = addDays(today, 1);

console.log('Tomorrow is:', formatDate(tomorrow, { year: 'numeric', month: 'short', day: 'numeric' }));
console.log('Is today?', isToday(today));
console.log('Start of week:', getStartOfWeek(today));



```

---

## 📚 API Reference

`addDays(date, days)`

Adds (or subtracts) days to a date.

```bash
addDays(new Date('2023-01-01'), 5); // → 2023-01-06
```

`getStartOfWeek(date, weekStartsOn = 0)`

Returns the start of the week.

- `weekStartsOn`: 0 (Sunday) to 6 (Saturday)

```bash
getStartOfWeek(new Date('2023-01-04'));        // → Sunday
getStartOfWeek(new Date('2023-01-04'), 1);     // → Monday
```

`formatDate(date, options?)`

Formats a date using `Intl.DateTimeFormat`.
Defaults to `yyyy-MM-dd`.

```bash
formatDate(new Date(), { month: 'long', day: '2-digit' });
// → "July 27"
```

`isToday(date)`
Checks if the given date is today.

```bash
isToday(new Date()); // → true
```

`isSameDay(date1, date2)`
Checks if two dates fall on the same day.

```bash
isSameDay(new Date('2023-01-01'), new Date('2023-01-01T23:59')); // → true
```

`differenceInDays(date1, date2)`
Returns number of days between dates.
Can be negative.

```bash
differenceInDays('2023-01-01', '2023-01-10'); // → 9
differenceInDays('2023-01-10', '2023-01-01'); // → -9
```

---

## 🧪 Testing

Tests are written using Vitest.
To run tests:

```bash
npm install
npm test
```

---

## 🤝 Contributing

Feel free to open issues or PRs! Simple, readable utilities are the goal — let’s keep it lightweight.

## 📄 License

Implementation (c) 2025 Gulam Ashraf. [MIT LICENSE](./LICENSE)
