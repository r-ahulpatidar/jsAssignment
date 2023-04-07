// Write a program to find the number of days in a month.

function isLeapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

function findDaysInMonth(month, year) {
  if (month < 1 || month > 12) {
    console.log(`Invalid Month of value ${month}`);
    return;
  }

  if (month == 2) {
    if (isLeapYear(year)) {
      console.log(`The Month has 29 days`);
    } else {
      console.log(`The Month has 28 days`);
    }
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    console.log(`The Month has 30 days`);
  } else {
    console.log(`The Month has 31 days`);
  }
}

findDaysInMonth(2, 2023);
