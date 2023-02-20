let date = new Date();
let [hour, minutes, seconds] = [
  date.getHours(),
  date.getMinutes(),
  date.getSeconds(),
];
let [day, month, year] = [date.getDate(), date.getMonth(), date.getFullYear()];
let hours = document.getElementById("hour");
hours.innerHTML = `${hour}:${minutes}:${seconds}`;
let dates = document.getElementById("dates");
dates.innerHTML = `${day}/ ${month + 1}/ ${year}`;
console.log("hola mundo");
console.log(date.setMilliseconds());
