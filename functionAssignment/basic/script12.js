// 12. Write a function to generate a random number Function 
// `genRandom()` return a generated random integer number between the provided 
// start and end range.

function genRandom(start, end) {
    return Math.floor(Math.random() * (end - start)) + start;
}
console.log(genRandom(10, 20)); // random int between 10 to 20
console.log(genRandom(40, 80));
// random int between 40 to 80