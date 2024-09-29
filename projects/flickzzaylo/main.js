import {GetDateInterval} from "./src/time.js";
import {DateTime} from "luxon";

const localDate = DateTime.local().toISO();
var sessionDate = DateTime.fromObject({ year: 2024, month: 12, day: 25, hour: 10, minute: 30, second: 0 }).toISO();
var newYearDate = DateTime.fromObject({ year: 2025, month: 1, day: 1, hour: 0, minute: 0, second: 0 }).toISO();
var diplomaDate = DateTime.fromObject({ year: 2025, month: 6, day: 24, hour: 12, minute: 30, second: 0 }).toISO();
console.log(`До сессии осталось ${GetDateInterval(localDate,sessionDate)}`);
console.log(`До нового года осталось ${GetDateInterval(localDate,newYearDate)}`);
console.log(`До защиты дилома осталось ${GetDateInterval(localDate,diplomaDate)}`);