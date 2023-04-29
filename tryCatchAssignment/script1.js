// Write a code to catch a range error and print a customised message

try {
  num.toPrecision(1000);
  // Have added extra 0 in 100
} catch (err) {
  console.log("Error Message", err);
}

// output
// Error Message ReferenceError num is not defined
