import { DataCheck } from "./time.js";
import {DateTime, Duration, Info, Interval, Settings} from 'luxon';

var data11=DateTime.local();
var data12=DateTime.local(2024,12,29,8,30);
var result=DataCheck(data11,data12);
var days = "";
var hours= "";
var minutes= "";
var seconds= "";
if(result.days>0){
    days=result.days+" дней";
}
if(result.hours>0){
    hours=result.hours+" часов";
}
if(result.minutes>0){
    minutes=result.minutes+" минут";
}
if(result.seconds>0){
    seconds=result.seconds+" секунд";
}
console.log(days,hours,minutes,seconds, "до сессии")

var data21=DateTime.local();
var data22 = DateTime.local(2025,1,1,0,0,0);
var result=DataCheck(data21,data22);
if(result.days>0){
    days=result.days+" дней";
}
if(result.hours>0){
    hours=result.hours+" часов";
}
if(result.minutes>0){
    minutes=result.minutes+" минут";
}
if(result.seconds>0){
    seconds=result.seconds+" секунд";
}
console.log(days,hours,minutes,seconds,"до НГ")

var data31 = DateTime.local();
var data32 = DateTime.local(2025,6,8,10,0);
var result=DataCheck(data31,data32);
if(result.days>0){
    days=result.days+" дней";
}
if(result.hours>0){
    hours=result.hours+" часов";
}
if(result.minutes>0){
    minutes=result.minutes+" минут";
}
if(result.seconds>0){
    seconds=result.seconds+" секунд";
}
console.log(days,hours,minutes,seconds,"до защиты")