import { timeBetweenDates } from './time.js';

const now = new Date();
const sessionDate = new Date(2024, 11, 29); 
const newYearDate = new Date(2025, 0, 1);
const defenseDate = new Date(2025, 5, 8); 

console.log("До сессии осталось: " + timeBetweenDates(now, sessionDate));
console.log("До Нового года осталось: " + timeBetweenDates(now, newYearDate));
console.log("До защиты осталось: " + timeBetweenDates(now, defenseDate));
