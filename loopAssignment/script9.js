// Write a Java program that takes a year from user and print whether that year is a leap
// year or not.

function checkLeapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log(`Year ${year} is a leap year`);
  } else {
    console.log(`Year ${year} is not a leap year`);
  }
}

checkLeapYear(2023);
