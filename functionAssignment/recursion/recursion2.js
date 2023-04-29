// 2. Sum of digits of a number
// The last digit of the num is added with a recursive call of “digitSum(num/10)” and the 
// recursive call is terminated once the num variable is 0.

function digitSum(num) {
    if (num == 0) {
        return num;
    }
    return num % 10 + digitSum(Math.floor(num / 10));
}

console.log(digitSum(3467));
console.log(digitSum(12345));
