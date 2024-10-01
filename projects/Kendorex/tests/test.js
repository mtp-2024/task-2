import { timeUntilNewYear } from '../src/index.js';

const testCases = [
    {
        date: new Date(2024, 8, 22, 21, 0, 0),
        expected: "100 дней 3 часов"
    },
    {
        date: new Date(2024, 11, 11, 2, 13, 13),
        expected: "20 дней 21 часов 46 минут 47 секунд"
    },
    {
        date: new Date(2024, 11, 31, 23, 59, 59),
        expected: "1 секунд"
    }
];

testCases.forEach((testCase, index) => {
    const result = timeUntilNewYear(testCase.date);
    const { days, hours, minutes, seconds } = result;

    if (days === testCase.expected.days && hours === testCase.expected.hours && minutes === testCase.expected.minutes && seconds === testCase.expected.seconds) {
        console.log(`Тест ${index + 1} пройден:`, result);
    } else {
        console.error(`Тест ${index + 1} провален:`, result, 'Ожидалось:', testCase.expected);
    }
});