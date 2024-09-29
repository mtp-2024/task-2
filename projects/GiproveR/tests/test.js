import { getTimeUntilNewYear } from "../src/index.js";

var date1_1 = new Date("September 22, 2024");
var date1_2 = new Date("September 22, 2024, 10:05:14");
const test1 = getTimeUntilNewYear(date1_1, date1_2);
if (test1 === " 10 часов 5 минут 14 секунд") {
    console.log("Test №1 passed, answer: Осталось", test1);
}
else {
    console.error("Test №1 failes with answer: ", test1);
}

var date2_1 = new Date("December 10, 1924, 00:20:00");
var date2_2 = new Date("September 28, 2024");
const test2 = getTimeUntilNewYear(date2_1, date2_2);
if (test2 === " 99 лет 316 дней 22 часов 40 минут") {
    console.log("Test №2 passed, answer: Осталось", test2);
}
else {
    console.error("Test №2 failes with answer: ", test2);
}

var date3_1 = new Date("June 1, 2024, 05:00:05");
var date3_2 = new Date("January 1, 2025, 10:00:11");
const test3 = getTimeUntilNewYear(date3_1, date3_2);
if (test3 === " 214 дней 5 часов 6 секунд") {
    console.log("Test №3 passed, answer: Осталось", test3);
}
else {
    console.error("Test №3 failes with answer: ", test3);
}