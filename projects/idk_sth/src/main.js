import { timeUntilNewYear } from "./timeFromDateToDate.js";

var start = new Date()

var end1 = new Date(2024, 11, 23, 0, 0, 0)
console.log(timeUntilNewYear(start, end1))

var end2 = new Date(2025, 0, 1, 0, 0, 0)
console.log(timeUntilNewYear(start, end2))

var end3 = new Date(2025, 5, 25, 0, 0, 0)
console.log(timeUntilNewYear(start, end3))

