var weekDay = moment();
$("#currentDay").text(weekDay.format('dddd, MMMM Do YYYY HH:mm A'));

let nine = document.getElementById('#09');
let ten = document.getElementById('#10');
let eleven = document.getElementById('#11');
let twelve = document.getElementById('#12');
let one = document.getElementById('#13');
let two = document.getElementById('#14');
let three = document.getElementById('#15');
let four = document.getElementById('#16');
let five = document.getElementById('#17');
let six = document.getElementById('#18');

let row = document.querySelectorAll('.time-row');

let hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const now = moment().hour();

for (const hour of hours) {

  if (now < hour) {
    
  } else if(now === hour) {

  } else {

  }
}


/*
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```
*/