const seconds = document.querySelector(".seconds .number");
const minutes = document.querySelector(".minutes .number");
const hours = document.querySelector(".hours .number");
const days = document.querySelector(".days .number");

let secvalue = 60;
let minvalue = 60;
let hourvalue = 24;
let dayvalue = 16;

const timeFunction = setInterval(()  => {
    secvalue--;

    if (secvalue === 0) {
        minvalue--;
        secvalue = 60;
    }
    if (minvalue === 0) {
        hourvalue--;
        minvalue = 60;
    }
    if (hourvalue === 0) {
        dayvalue--;
        hourvalue = 60;
    }
    if (dayvalue === 0) {
        clearInterval(timeFunction);
    }

    seconds.textContent = secvalue < 10 ? `0${secvalue}` : secvalue;
    minutes.textContent = minvalue < 10 ? `0${minvalue}` : minvalue;
    hours.textContent = hourvalue < 10 ? `0${hourvalue}` : hourvalue;
    days.textContent = dayvalue < 10 ? `0${dayvalue}` : dayvalue;
}, 1000);














