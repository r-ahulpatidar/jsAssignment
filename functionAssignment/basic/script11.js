// 11. Write a function to calculate compound interest based on the principle amount Function
// `compoundInt()` returns a final amount based on the compound interest formula provided
// principal amount, rate of interest per year, time on a yearly basis, and n as the number of times
// that interest is compounded per unit time.

function compoundInt(principle, rate, time, n) {
  var interest = principle * Math.pow(1 + rate / n, n * time);
  return principle + interest;
}
console.log(compoundInt(20000, 5, 2, 2)); //3021250
console.log(compoundInt(150000, 25, 1, 2)); //27487500
