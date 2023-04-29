// WAF called sumRange. It will take a number and return the sum of all numbers from 1 to up to the number passed in.

// function sumRange(num) {
//     if(num == 1) {
//         return 1;
//     }
//     return num + sumRange(num - 1);
// }
// console.log(sumRange(10));

function sumRange(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(sumRange(10));
