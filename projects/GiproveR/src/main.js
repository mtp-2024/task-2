import { getTimeUntilNewYear } from "./index.js";

var dateNow = new Date();
var dateSession = new Date("December 29, 2024");
console.log("До сессии осталось ", getTimeUntilNewYear(dateNow, dateSession));
var dateNewYear = new Date("January 1, 2025");
console.log("До Нового года осталось ", getTimeUntilNewYear(dateNow, dateNewYear));
var dateDiplom = new Date("June 8, 2025");
console.log("До защиты диплома осталось ", getTimeUntilNewYear(dateNow, dateDiplom));