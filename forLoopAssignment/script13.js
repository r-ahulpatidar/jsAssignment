// WAP to print products of digits of a number.

let num = 12345;
let product = 1;

for (; num > 0; ) {
  rem = num % 10;
  product = product * rem;
  num = parseInt(num / 10);
}
console.log(product);

// let num = 12345;
// let str = num.toString();
// let product = 1;
// for (let x = 0; x < str.length; x++) {
//   product = product * parseInt(str[x]);
// }

// console.log(product);

// output
// 120
