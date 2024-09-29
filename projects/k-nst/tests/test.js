import { timeBetweenDates } from "../src/time.js";

var date_one = new Date(2024, 9, 9);
var date_two = new Date(2003, 0, 15);
var date_three = new Date(2013, 10, 25);

const expected_one = "84 дней";
const test_one = timeBetweenDates(date_one, new Date(2025, 0, 1));
if (test_one === expected_one) {
    console.log("Ответ верный");
} else {
    console.error("Ответ неверный");
}

const expected_two = "8022 дней";
const test_two = timeBetweenDates(date_two, new Date(2025, 0, 1));
if (test_two === expected_two) {
    console.log("Ответ верный");
} else {
    console.error("Ответ неверный");
}

const expected_three = "4055 дней 1 часов";
const test_three = timeBetweenDates(date_three, new Date(2025, 0, 1));
if (test_three === expected_three) {
    console.log("Ответ верный");
} else {
    console.error("Ответ неверный");
}