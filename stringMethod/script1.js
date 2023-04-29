const str = "Hello, I'm a student of Primathon Academy.";
// Expected output -
// Hello, I'm a student
// Primathon Academy.
// Solutions:
const academyName = "Hello, I'm a student of Primathon Academy.";
console.log(academyName.split(" ").splice(0, 4).join(" "));

// console.log(academyName.split(" ").splice(0,4).join(" "));
// Hello, I'm a student
// console.log(academyName.split(" ").splice(5,7).join(" "));
// Primathon Academy.

// console.log(academyName.slice(0, 20));