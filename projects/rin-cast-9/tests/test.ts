import { calculateTimeInterval } from "../src/calculateTimeInterval";

describe('calculateTimeInterval', () => {
    test('Test Case 1: Basic functionality', () => {
        const testStartDate = new Date('2024-01-01');
        const testEndDate = new Date('2025-01-01');
        const result = calculateTimeInterval(testStartDate, testEndDate);
        expect(result).toBe("366 days  0 hours  0 minutes  0 seconds");
    });

    test('Test Case 2: Same dates difference', () => {
        const testStartDate = new Date('2024-01-01T07:00:00');
        const testEndDate = new Date('2024-01-01T07:00:00');
        const result = calculateTimeInterval(testStartDate, testEndDate);
        expect(result).toBe(" 0 seconds");
    });
});