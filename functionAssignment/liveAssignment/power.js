// WAF called power which takes in a base and exponent.If the exponent is 0, return 1.

function power(base, exponent) {
    let result = 1;
    if (exponent == 0) {
        return 1;
    }
    for (let i= 1; i <= exponent; i++) {
        result = result * base;
    }
    return result;
}
console.log(power(2, 6));

