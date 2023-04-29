let num = 1;
try {
  num.toUpperCase(); // Trying to convert a number to upper case
} catch (err) {
  console.log("Error caught. Name of the error is:", err.name);
  console.log("Message of error says:", err.message);
}
