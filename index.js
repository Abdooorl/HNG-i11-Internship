const currentDay = document.querySelector(".current-day")
const currentTime = document.querySelector(".current-time")

const date = new Date()
const day =  date.toLocaleString("en-US", { timeZone: 'UTC', weekday: 'long' });
const time = date.toLocaleTimeString("en-US", { timeZone: 'UTC' });

currentDay.innerHTML = `${day}`;
currentTime.innerHTML = `${time}`;
