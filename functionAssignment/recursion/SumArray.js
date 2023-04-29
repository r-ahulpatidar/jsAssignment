// Total sum of an array
// The total sum of an array is calculated from the addition of the current array element
// arr[i] with a recursive call of the following index “arraySum(i+1,arr)“. The base condition
// “i >= arr.length” ensures termination beyond the last index of the array.

let arr = [2, 12, 34, 54, 41];
function arraySum(i, arr) {
  if (i >= arr.length) {
    return 0;
  }
  return arr[i] + arraySum(i + 1, arr);
}
console.log(arraySum(0, arr));
// 143
