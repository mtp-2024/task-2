import { DateTest } from "../src/task1.js";

var date1=new Date();
var date2=new Date(2022,11,30,0,0);
var date3=new Date();
date3.setFullYear(date3.getFullYear()+1);

var res1=DateTest(date1);
if(res1=="Событие прошло" ||res1==" 0 секунд"){
    console.log('right answer');
}else{
    throw new Error('wrong answer');
}

var res2=DateTest(date2);
if(res2=="Событие прошло"){
    console.log('right answer');
}else{
    throw new Error('wrong answer');
}


var res3=DateTest(date3);
if(res3=="365 дней" ||"364 дня 23 часа 59 минут 59 секунд"){
    console.log('right answer');
}else{
    throw new Error('wrong answer');
}