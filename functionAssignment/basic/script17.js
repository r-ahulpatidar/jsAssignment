// 17. Write a function to check if a number is Prime Function
// `checkPrime()` return Boolean value based on whether the number is Prime or not.

function checkPrime(num, div = 2) {
  //Base case
  if (num <= 2) {
    return num == 2 ? true : false;
  }
  // No divisor case
  if (div * div > num) {
    return true; //  2 * 2 > num
  }
  // Number is not prime if divisible
  if (num % div == 0) {
    return false;
  }
  // Recursive call with next divisor
  return checkPrime(num, div + 1);
}
console.log(checkPrime(27)); // false
console.log(checkPrime(19)); // true
console.log(checkPrime(0));
console.log(checkPrime(1));
console.log(checkPrime(2));
console.log(checkPrime(3));
console.log(checkPrime(4));