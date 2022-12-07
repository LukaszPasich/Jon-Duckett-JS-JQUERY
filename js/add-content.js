// var today = new Date();
// var hourNow = today.getHours();
// var greeting;

// if (hourNow > 18) {
//     greeting = 'Good evening!';
// } else if (hourNow > 12) {
//     greeting = 'Good afternoon!';
// } else if (hourNow > 0) {
//     greeting = 'Good morning!';
// } else {
//     greeting = 'Welcome!';
// }

// document.write('<h3>' + greeting + '</h3>');



var today = new Date();
var hourNow = today.getHours();
var minutesNow = today.getMinutes();
var someDay = new Date(2000000000000);
var getDate = today.getDate();
var getDay = today.getDay();
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let weekDaysLength = weekDays.length;


var one = document.getElementById("one");
one.textContent = getDay;

var two = document.getElementById("two");
var hourNowText = '<p>the time now is ' + hourNow + ':' + minutesNow + '</p>';

var dayTodayText =
    '<p>Today is ' + weekDays[getDay] + '</p>' +
    '<p>Tomorrow it is going to be ' + weekDays[getDay + 1] + '</p>';

// two.innerHTML = hourNowText;
two.innerHTML = dayTodayText;

