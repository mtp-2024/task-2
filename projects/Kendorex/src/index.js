function formatTimeDifference(startDate, endDate) {
    const diff = endDate - startDate;
    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    let result = '';
    if (days > 0) result += `${days} дней `;
    if (hours > 0) result += `${hours} часов `;
    if (minutes > 0) result += `${minutes} минут `;
    if (seconds > 0) result += `${seconds} секунд`;

    return result.trim();
}

function timeUntilNewYear(date) {
    const newYearDate = new Date(date.getFullYear() + 1, 0, 1);
    return formatTimeDifference(date, newYearDate);
}

export { formatTimeDifference, timeUntilNewYear };