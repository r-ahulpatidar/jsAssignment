// Q1. Write a JavaScript program that accept two integers and display the larger

function findMax(a, b) {
    if(a > b) {
        return (a + " is larger");
    } else if (b > a) {
        return (b + " is larger");
    } else {
        return (a + " and " + b + " both are equal");
    }
}

console.log(findMax(7, 7));
// Rahul patidar