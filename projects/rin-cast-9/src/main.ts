import { calculateTimeInterval } from "./calculateTimeInterval";

function main() {

    const now: Date = new Date();
    const currentYear: number = now.getFullYear();

    const events: { name: string, date: Date }[] = [
        { name: "Exams         ", date: new Date(`December 29, ${currentYear} 08:30:00`) },
        { name: "New Year      ", date: new Date(`January 1, ${currentYear + 1} 00:00:00`) },
        { name: "Thesis Defense", date: new Date(`June 8, ${currentYear + 1} 10:00:00`) }
    ];

    events.forEach(event => {
        if (event.date < now) {
            console.log(`${event.name} has already passed`);
        }
        else {
            const timeRemaining = calculateTimeInterval(now, event.date);
            console.log(`Time until ${event.name}: ${timeRemaining}`);
        }
    });

}

main();