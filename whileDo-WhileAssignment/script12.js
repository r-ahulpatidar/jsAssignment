// WAP to find the power of a number.

const prompt = require("prompt-sync")();
a = parseInt(prompt("Enter the base value: "));
n = parseInt(prompt("Enter the exponent value: "));

let i = 1;
let ans = 1;
while (i <= n) {
    ans = ans * a;
    i++;
}
console.log(ans);
