// 6. Write a function to reverse a number Function.
// `reverseNum()` returns the reversed number for the given argument number value.

function reverseNum(num) {
  let reverse = 0;
  while (num != 0) {
    reverse = reverse * 10;
    reverse = reverse + (num % 10);
    num = Math.trunc(num / 10); // Remove decimal places
  }
  return reverse;
}
console.log(reverseNum(123)); //321
console.log(reverseNum(5872)); //2785
