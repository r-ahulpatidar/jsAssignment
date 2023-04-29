// WAP to find the number of digits in a number.

const prompt = require("prompt-sync")();
var num;
num = prompt("Enter a number ");

let count = 0;

while (num > 0) {
    rem = num % 10;
    num = parseInt(num / 10);
    count++;
}
console.log(count);
