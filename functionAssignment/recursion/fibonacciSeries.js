// Fibonacci series
// The Fibonacci number of n is calculated by adding the Fibonacci numbers of n-1 and
// n-2. Additionally, base conditions f(0) =0, f(1)=1 and f(2)=1 are included.

function findFib(n) {
  if (n <= 0) {
    return 0;
  } else if (n < 3) {
    return 1;
  }
  return findFib(n - 1) + findFib(n - 2);
}
console.log(findFib(5));
// 5
console.log(findFib(9));
// 34


// function fibonacciSeries(num) {
//     let n1 = 0;
//     let n2 = 1;
//     let nextTerm = n1 + n2;
//     for (let i = 1; i <= num; i++) {
//         console.log(n1);
//         nextTerm = n1 + n2;
//         n1 = n2;
//         n2 = nextTerm;
//     }
// }

// console.log(fibonacciSeries(4));
