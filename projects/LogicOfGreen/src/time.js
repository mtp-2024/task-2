import {DateTime, Duration, Info, Interval, Settings} from 'luxon'

export function DataCheck(data1,data2){
    var daysToNewYear = data2.diff(data1, ['days', 'hours', 'minutes', 'seconds']);
    return daysToNewYear;
}