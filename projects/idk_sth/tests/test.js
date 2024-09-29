import { timeUntilNewYear } from "../src/timeFromDateToDate.js";


var start1 = new Date(2024, 3, 3, 0, 0, 0)
var end1 = new Date(2025, 1, 1, 0, 0, 0)
if (timeUntilNewYear(start1, end1) == "304 дней 0 часов 0 минут 0 секунд ")
    console.log("the test is passed")
else
    console.log("an error has occured")

var start2 = new Date(2024, 11, 1, 0, 0, 0)
var end2 = new Date(2025, 5, 25, 0, 0, 0)
if (timeUntilNewYear(start2, end2) == "206 дней 0 часов 0 минут 0 секунд ")
    console.log("the test is passed")
else 
    console.log("an error has occured")

var start3 = new Date(2024, 8, 29, 12, 0, 0)
var end3 = new Date(2024, 8, 29, 22, 0, 0)
if (timeUntilNewYear(start3, end3) == "10 часов 0 минут 0 секунд ")
    console.log("the test is passed")
else
    console.log("an error has occured")


