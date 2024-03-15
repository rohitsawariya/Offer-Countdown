const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const lastDate = document.querySelector(".end h2");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

////////////////// TO Select a Last Date //////////////////
var countDownDate = new Date(2024,2,10,12,0,0);

    let year = countDownDate.getFullYear();
    let month = months[countDownDate.getMonth()];
    let date = countDownDate.getDate();
    let hours = countDownDate.getHours();
    let weekday = days[countDownDate.getDay()];

lastDate.innerHTML = `Offer Ends On, ${weekday} ${hours} p.m ${date} ${month} ${year}`

const futureTime = countDownDate.getTime();
// console.log(futureTime);

function remainingTime(){
const today = new Date().getTime();
const restOfTime = futureTime-today;
// console.log(restOfTime);

const oneDay = 24*60*60*1000;
const oneHour = 60*60*1000;
const oneMinute = 60*1000;

let days = restOfTime/oneDay;
days = Math.floor(days);
let hours = Math.floor ((restOfTime%oneDay)/oneHour);
let minutes = Math.floor((restOfTime%oneHour)/oneMinute)
let seconds = Math.floor((restOfTime%oneMinute)/1000);

function format(item){
    if(item<10){
        return (item = `0${item}`);
    }
    return item;
}

const values = [days, hours, minutes, seconds];

    items.forEach((item, index) => {
        item.innerHTML = values[index];
    });

if(restOfTime<0){
    clearInterval(countDown)
    deadline.innerHTML = `<h4 style="font-size:40px; color:black; border-bottom: 4px solid black; font-family: 'Arial, sans-serif';" class="expired">Sorry, this offer has expired</h4>`;

}

}

let countDown = setInterval(remainingTime,1000);

remainingTime();