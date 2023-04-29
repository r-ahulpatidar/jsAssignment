// 15. Write a function to combine unlimited arrays Function
// `addArrays()` return the concatenated array by combining all the arrays passed as an argument
// of the function.

function addArrays(...args) {
  return args.reduce((total, arr) => total.concat(arr), []);
  //total == accum == [], arr == curr
}
console.log(addArrays([2, 3, 4], [6, 4, 9], [34, 6, 4]));
// [2, 3, 4, 6, 4, 9, 34, 6, 4]
