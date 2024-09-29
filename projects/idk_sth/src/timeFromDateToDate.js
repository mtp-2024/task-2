export function timeUntilNewYear(started_date, ended_date) {

    var start = started_date.getTime()
    var target = ended_date
    var days = (target - start)/1000/60/60/24
    var without_days = (target - start)%86400000
    var hours = without_days/3600000
    var without_hours = without_days%3600000
    var minutes = without_hours/60000
    var without_minutes = without_hours%60000
    var seconds = without_minutes/1000

    days = (Math.floor(days) != 0 ? Math.floor(days) + " дней " : "")
    hours = (days == "" && Math.floor(hours) == 0 ? "" : Math.floor(hours) + " часов ")
    minutes = (hours == "" && Math.floor(minutes) == 0 ? "" : Math.floor(minutes) + " минут ")
    seconds = (minutes == "" && Math.floor(seconds) == 0 ? "" : Math.floor(seconds) + " секунд ")    

    return (days + hours + minutes + seconds).toString()
}
