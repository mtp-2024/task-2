export function calculateTimeInterval (
    startDate: Date,
    endDate: Date
): string {

    const timeDifference: number = endDate.getTime() - startDate.getTime();

    if (timeDifference < 0) {
        return "The even has passed";
    }

    const seconds: number = Math.floor((timeDifference / 1000) % 60);
    const minutes: number = Math.floor((timeDifference / 60000) % 60);
    const hours: number = Math.floor((timeDifference / 3600000) % 24);
    const days: number = Math.floor(timeDifference / 86400000);

    return formatTimeInterval(days, hours, minutes, seconds);

}

function formatTimeInterval(days: number, hours: number, minutes: number, seconds: number): string {
    const timeComponents: string[] = [];

    if (days > 0) {
        timeComponents.push(`${String(days).padStart(3, ' ')} ${days === 1 ? 'day' : 'days'}`);
    }
    if (hours > 0 || timeComponents.length > 0) {
        timeComponents.push(`${String(hours).padStart(2, ' ')} ${hours === 1 ? 'hour' : 'hours'}`);
    }
    if (minutes > 0 || timeComponents.length > 0) {
        timeComponents.push(`${String(minutes).padStart(2, ' ')} ${minutes === 1 ? 'minute' : 'minutes'}`);
    }

    timeComponents.push(`${String(seconds).padStart(2, ' ')} ${seconds === 1 ? 'second' : 'seconds'}`);

    return timeComponents.join(' ');

}
