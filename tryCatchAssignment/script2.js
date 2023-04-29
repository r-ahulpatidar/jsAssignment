// Write a code to throw and catch a URI error and print the name of the Error

try {
  decodeURIComponent("%");
} catch (e) {
  console.log("Error caught. Name of the error is: ", e.name);
  // "URIError"
}
