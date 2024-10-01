import { timeDue } from "./timeDue.js";

console.log("started");

const nextNewYear = new Date('2025-01-01T00:00:00');
const session = new Date('2024-12-25T08:30:00');
const graduationPaper = new Date('2025-06-25T11:50:00');

timeDue(session);
timeDue(nextNewYear);
timeDue(graduationPaper);