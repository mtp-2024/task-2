
export function DateTest(date){
    const today = new Date();
    const msTime = date-today;
    if(msTime<0)return "Событие прошло";
    const secTime = Math.floor((msTime/1000));
    const minTime = Math.floor(secTime/60);
    const hourTime = Math.floor(minTime/60);
    const daysTime = Math.floor(hourTime/24);
    
    return formationTI(secTime,minTime,hourTime,daysTime);
}
function formationTI(seconds,minutes,hours,days){
    const formatArray=[];
    function getPluralForm(number, single, couple, bunch) {
        if (number % 10 === 1 && number % 100 !== 11) {
            return single;
        } else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
            return couple;
        } else {
            return bunch;
        }
    }
    
    if (days > 0) {
        formatArray.push(`${String(days).padStart(3, ' ')} ${getPluralForm(days, 'день', 'дня', 'дней')}`);
    }
    if (hours % 24 > 0 || formatArray.length > 0) {
        formatArray.push(`${String(hours % 24).padStart(2, ' ')} ${getPluralForm(hours % 24, 'час', 'часа', 'часов')}`);
    }
    if (minutes % 60 > 0 || formatArray.length > 0) {
        formatArray.push(`${String(minutes % 60).padStart(2, ' ')} ${getPluralForm(minutes % 60, 'минута', 'минуты', 'минут')}`);
    }
    formatArray.push(`${String(seconds % 60).padStart(2, ' ')} ${getPluralForm(seconds % 60, 'секунда', 'секунды', 'секунд')}`);

    return formatArray.join(' ');
}