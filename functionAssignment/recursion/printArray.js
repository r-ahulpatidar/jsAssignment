// Print elements of an array
// The current array element “arr[i]” is printed and recursive call to print next element
// “printArray(arr, i + 1)” is made. Once all elements of the array are printed and “i” variable
// exceeds the array length, the function call is returned to avoid infinite recursion.

let arr = [2, 12, 34, 54, 41];
function printArray(arr, i) {
  if (i >= arr.length) {
    return;
  }
  console.log(`Element at index ${i} is ${arr[i]}`);
  printArray(arr, i + 1);
}
printArray(arr, 0);
// Element at index 0 is 2
// Element at index 1 is 12
// Element at index 2 is 34
// Element at index 3 is 54
// Element at index 4 is 41
