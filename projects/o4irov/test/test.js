import { timeDue } from "../src/timeDue.js";

console.log("testing timeDue");

const now = new Date();
const firstDate = new Date('1995-12-17T03:24:00');
const secDate = new Date('2003-10-11T10:25:00');
const thirdDate = new Date('2002-09-25T11:55:00');

const firstResult = timeDue(now, firstDate);
if (firstResult['days'] >= 0 && firstResult['hours'] >= 0) {
    console.log('first test passed!');
} else {
    throw new Error('first test failed');
}

const secondResult = timeDue(now, secDate);
if (secondResult['days'] >= 0 && secondResult['hours'] >= 0) {
    console.log('second test passed!');
} else {
    throw new Error('second test failed');
}

const thirdResult = timeDue(now, thirdDate);
if (thirdResult['days'] >= 0 && thirdResult['hours'] >= 0) {
    console.log('third test passed!');
} else {
    throw new Error('third test failed');
}

console.log("all tests passed!");