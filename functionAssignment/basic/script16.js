// 16. Write a function to find the count of a letter in a string Function
// `letterCount()` return the count of letter in a given string.

function letterCount(str, c) {
  let count = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == c) {
      count++;
    }
  }
  return count;
}
console.log(letterCount("Connect", "c")); // 2
console.log(letterCount("umbrella", "m")); // 2
