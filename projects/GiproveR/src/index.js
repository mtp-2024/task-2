export function getTimeUntilNewYear(date1, date2) {
    const time = date2-date1;
    const years = Math.floor(time / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor(time / (1000 * 60 * 60 * 24) % 365);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor((time / 1000) % 60);

    var answer = "";
    if (years !== 0) {
        answer = answer + ` ${years} лет`;
    }
    if (days !== 0) {
        answer = answer + ` ${days} дней`;
    }
    if (hours !== 0) {
        answer = answer + ` ${hours} часов`;
    }
    if (minutes !== 0) {
        answer = answer + ` ${minutes} минут`;
    }
    if (seconds !== 0) {
        answer = answer + ` ${seconds} секунд`;
    }
    //console.log(answer);
    
    return answer;
}