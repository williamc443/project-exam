const date = new Date();

date.setDate(1);

console.log(date.getDay());

//Set current month:
// date.setMonth(6);

const monthDays = document.querySelector('.days')

const lastDay = new Date(date.getFullYear(),
date.getMonth() + 1, 0).getDate();
//+1 = last day of the current month
//,1 = last day og the previous month

// console.log(lastDay);

const prevLastDay = new Date(date.getFullYear(),
date.getMonth(), 0).getDate();

console.log(prevLastDay);

const firstDayIndex = date.getDay();

const months = [
    "january",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

document.querySelector('.date h1').innerHTML= months[date.getMonth()];

document.querySelector('.date p').innerHTML= date.toDateString();

let days = "";

for(let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x}</div>`;
}

for(let i = 1; i <= lastDay; i++) {
    days += `<div>${i}</div>`;
    monthDays.innerHTML = days;
    // x += 10  x = x + 10
} 

// const month = date.getMonth();

// console.log(month);

