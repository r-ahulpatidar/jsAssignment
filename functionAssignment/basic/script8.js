// 8. Flatten array of arrays using JavaScript reduce Function.

// `flattenArr()` flattens a 2D array by combining each sub array into 1D array by using JavaScript
// reduce.

function flattenArr(arr) {
  return arr.reduce((result, array) => result.concat(array), []);  // result me empty array jaayegei aur array me arr[0]
  // reduce(result, array) me result == accum and array == curr
}
console.log(
  flattenArr([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const arr1 = [];
// const arr2 = [1, 2, 3];
// const arr = arr1.concat(arr2);
// console.log(arr);