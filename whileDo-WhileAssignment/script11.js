// - WAP to print factorials of a number.

const prompt = require("prompt-sync")();
var num;
num = prompt("Enter a number ");

let fact = 1;
do {
    fact = fact * num;
    num--;
} while ( num > 0);
console.log(fact);