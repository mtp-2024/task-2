const getTimeBetweenDates = require('../src/countdown');

function testCountdown() {
  const testCases = [
    { start: new Date('December 30, 2023 23:59:59'), end: new Date('January 1, 2024 00:00:00') },
    { start: new Date('November 1, 2023 12:00:00'), end: new Date('January 1, 2024 00:00:00') }
  ];

  testCases.forEach((test, index) => {
    const result = getTimeBetweenDates(test.start, test.end);
    console.log(`Test case ${index + 1}: ${result}`);
  });
}

testCountdown();
