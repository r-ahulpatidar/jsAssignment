// What is the output?

for (let j = 5, k = 1, l = 2, m = 3, n = 4, x = 5; j > 0; ) {
  console.log(x, x - 1 + k, x - 2 + l, x - 3 + m, x - 4 + n);
  j = j - 1;
  k = 0;
  l = 0;
  m = 0;
  n = 0;
}

// output
// 5 5 5 5 5
// 5 4 3 2 1
// 5 4 3 2 1
// 5 4 3 2 1
// 5 4 3 2 1
