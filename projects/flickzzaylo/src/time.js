import {DateTime} from "luxon";

export function GetDateInterval(startDate_, endDate_){
    var startDate = DateTime.fromISO(startDate_);
    var endDate = DateTime.fromISO(endDate_);
    const diff = endDate.diff(startDate, ["years", "months", "days", "hours", "minutes", "seconds"]).toObject();
    return Object.entries(diff)
        .filter(([key,value]) => value !== 0)
        .map(([key,value]) => `${value} ${key}`)
        .join(' ');
}
