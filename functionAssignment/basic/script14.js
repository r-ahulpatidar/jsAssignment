// 14. Write a function to add unlimited numbers Function
// `addNumber()` return the sum of all the number passed as arguments of the function.

function addNumber(...args) {
  return args.reduce((total, num) => total + num, 0);
  //total == accum, num == curr
}

console.log(addNumber(2, 4, 7)); // 13
console.log(addNumber(10, 20, 30, 40, 50)); // 150
