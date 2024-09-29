import {GetDateInterval} from "../src/time.js";
import {DateTime, Duration, Info, Interval, Settings} from 'luxon';


const test1 = (date) =>{
    const startDate = new Date('2022-08-13T15:12:00').toISOString();
    const endDate = new Date('2023-02-01T08:33:00').toISOString();
    var response = GetDateInterval(startDate, endDate);
    if(response!==null){
        console.log(response)
    }
}
const test2 = (date) =>{
    const startDate = new Date('2000-01-01T00:00:00').toISOString();
    const endDate = new Date('2024-12-12T21:44:30').toISOString();
    var response = GetDateInterval(startDate, endDate);
    if(response!==null){
        console.log(response)
    }
}
const test3 = (date) =>{
    const startDate = new Date('2023-01-01T00:00:00').toISOString();
    const endDate = new Date('2023-12-31T23:59:59').toISOString();
    var response = GetDateInterval(startDate, endDate);
    if(response!==null){
        console.log(response)
    }
}


test1()
test2()
test3()
