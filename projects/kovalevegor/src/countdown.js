function formatTimeRemaining(days, hours, minutes, seconds) {
  let result = [];
  
  if (days > 0) result.push(`${days} дней`);
  if (hours > 0) result.push(`${hours} часов`);
  if (minutes > 0) result.push(`${minutes} минут`);
  if (seconds > 0) result.push(`${seconds} секунд`);
  
  return result.join(' ');
}

function getTimeBetweenDates(startDate, endDate) {
  const timeDiff = endDate - startDate;

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  return formatTimeRemaining(days, hours, minutes, seconds);
}

module.exports = getTimeBetweenDates;
