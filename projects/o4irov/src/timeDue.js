export const timeDue = (toDate, fromDate) => {
    var now;
    if (fromDate) {
        now = fromDate;
    } else {
        now = new Date();
    }

    const diff = toDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    console.log('До указанной даты: ' + (days === 0 ? '' : `${days} дней `) + (hours === 0 && days === 0 ? '' : `${hours} часов `) + (hours === 0 && days === 0 && minutes === 0 ? '' : `${minutes} минут `) + (hours === 0 && days === 0 && minutes === 0 && seconds === 0 ? '' : `${seconds} секунд`));

    return { "days": days, "hours": hours, "minutes": minutes, "seconds": seconds };
}