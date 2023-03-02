
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const finalDate = new Date("2023 sep, 21, 13:00:00").getTime()



function countdown(){
    let now = new Date(Date.now()).getTime()
    let diff = finalDate - now

    document.getElementById('days').innerText = Math.floor(diff/day)
    document.getElementById('hours').innerText = Math.floor(diff % day / hour)
    document.getElementById('minutes').innerText = Math.floor(diff % hour / minute)
    document.getElementById('seconds').innerText = Math.floor(diff % minute / second)
    }

let x = setInterval(() => countdown(), second)


