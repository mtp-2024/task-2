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

    test('Test Case 3: A second apart dates', () => {
        const testStartDate = new Date('2024-01-01T07:00:00');
        const testEndDate = new Date('2024-01-01T07:00:01');
        const result = calculateTimeInterval(testStartDate, testEndDate);
        expect(result).toBe(" 1 second");
    });

    test('Test Case 4: A minute apart dates', () => {
        const testStartDate = new Date('2024-01-01T07:00:00');
        const testEndDate = new Date('2024-01-01T07:01:00');
        const result = calculateTimeInterval(testStartDate, testEndDate);
        expect(result).toBe(" 1 minute  0 seconds");
    });

    test('Test Case 5: An hour apart dates', () => {
        const testStartDate = new Date('2024-01-01T07:00:00');
        const testEndDate = new Date('2024-01-01T08:00:00');
        const result = calculateTimeInterval(testStartDate, testEndDate);
        expect(result).toBe(" 1 hour  0 minutes  0 seconds");
    });

    test('Test Case 6: Past date', () => {
        const testStartDate = new Date('2024-01-01T08:00:00');
        const testEndDate = new Date('2024-01-01T07:00:00');
        const result = calculateTimeInterval(testStartDate, testEndDate);
        expect(result).toBe("The even has passed");
    });

    test('Test Case 7: Large intervals', () => {
        const testStartDate = new Date('1994-01-01T00:00:00');
        const testEndDate = new Date('2067-07-12T00:00:00');
        const result = calculateTimeInterval(testStartDate, testEndDate);
        expect(result).toBe("26855 days  0 hours  0 minutes  0 seconds");
    });
});