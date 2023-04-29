// Write a function to perform add, subtract, multiply and divide using Higher Order Function.

const add = (input) => {
   return input + 2;
}
const subtract = (input) => {
    return input / 2;
}
const multiply = (input) => {
    return input * 2;
}
const divide = (input) => {
    return input / 2;
}

const differentOperations = (arr, logic) => {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(logic(arr[i]));
    }
    return output;
}

const addResult = differentOperations([1, 2, 3], add);
console.log(addResult);
