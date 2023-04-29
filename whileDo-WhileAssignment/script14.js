// WAP to find sum of all odd numbers between 1 to n.

const prompt = require("prompt-sync")();
n = parseInt(prompt("Enter the limit of n "));

let i = 1;
let sum = 0;
do {
    sum = sum + i;
    i += 2;
} while (i <=n)
console.log(sum);