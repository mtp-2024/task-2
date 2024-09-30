import { DateTest } from "./task1.js";
    const today=new Date();
    const thisYear=today.getFullYear();
    const timeStamps=[
        {name:"Экзаменов   ",date:new Date(thisYear,11,29,8,30,0)},
        {name:"Нового года ",date:new Date(thisYear+1,0,1,0,0,0)},
        {name:"ВКР         ",date:new Date(thisYear+1,5,8,0,0,0)}
    ];
    timeStamps.forEach(i=>{
        if(i.date<today){
            console.log(i.name+" уже прошел")
        }
        else{
            console.log("До "+i.name+" осталось "+DateTest(i.date) )
        }
    })