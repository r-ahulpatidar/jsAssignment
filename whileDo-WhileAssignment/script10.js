// WAP to print products of digits of a number.

const prompt = require("prompt-sync")();
var num;
num = prompt("Enter a number ");

let product = 1;
while (num > 0) {
    rem = num % 10;
    product = product * rem;
    num = parseInt(num / 10);
}
console.log(product);