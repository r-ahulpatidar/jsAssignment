// Write a program that keeps a number from the user and generates an integer between
// 1 and 7 and displays the name of the weekday.

val = 3;
let weekDay;
switch (val) {
  case 1:
    weekDay = "Sunday";
    break;
  case 2:
    weekDay = "Monday";
    break;
  case 3:
    weekDay = "Tuesday";
    break;
  case 4:
    weekDay = "Wenzday";
    break;
  case 5:
    weekDay = "Thursday";
    break;
  case 6:
    weekDay = "Friday";
    break;
  case 7:
    weekDay = "Saturday";
    break;
  default:
    weekDay = "Invalid day";
}

console.log(weekDay);
