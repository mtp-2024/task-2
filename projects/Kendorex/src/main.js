import { formatTimeDifference } from './index.js';

const now = new Date();
const sessionDate = new Date('2024-12-15');
const newYearDate = new Date('2025-01-01');
const defenseDate = new Date('2025-05-20');

console.log(`До сессии: ${formatTimeDifference(now, sessionDate)}`);
console.log(`До НГ: ${formatTimeDifference(now, newYearDate)}`);
console.log(`До защиты: ${formatTimeDifference(now, defenseDate)}`);