// 7. Count number of Vowels in String Function.

// `countVowel()` returns the number of vowels in input string. Learn more about JavaScript String
// methods from javatpoint.com/javascript-string.

function countVowel(str) {
  let count = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (
      str.charAt(i) == "a" ||
      str.charAt(i) == "e" ||
      str.charAt(i) == "i" ||
      str.charAt(i) == "o" ||
      str.charAt(i) == "u"
    ) {
      count++; //Increment vowel count
    }
  }
  return count;
}
console.log(countVowel("Hello")); //2
console.log(countVowel("Umbrella")); //3
console.log(countVowel("Rahul")); //2
