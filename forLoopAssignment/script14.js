// WAP to print the sum of digits of a number

let num = 12345;
let sum = 0;

for (;num > 0;) {
    rem = num % 10;
    sum = sum + rem;
    num = parseInt(num / 10);
}
console.log(sum);


// let num = 12345;
// let sum = 0;
// let str = num.toString();
// for (let x = 0; x < str.length; x++) {
//     sum = sum + parseInt(str[x]);
// }

// console.log(sum);