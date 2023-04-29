// WAF to find the greatest common divisor (gcd) of two positive numbers.

// function gcd(a, b) {
//   // Everything divides 0
//   if (a == 0) {
//     return b;
//   }
//   if (b == 0) {
//     return a;
//   }
//   // base case
//   if (a == b) {
//     return a;
//   }
//   // a is greater
//   if (a > b) {
//     return gcd(a - b, b);
//   }
//   return gcd(a, b - a);
// }

function gcd(a, b) {
  let hcf;
  for (let i = 0; i <= a && i <= b; i++) {
    if (a % i == 0 && b % i == 0) {
      hcf = i;
    }
  }
  return hcf;
}


console.log(gcd(2, 9));
console.log(gcd(15, 25));
