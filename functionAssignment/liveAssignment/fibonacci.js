// WAF to get the first n Fibonacci numbers

function fibonacciSeries(num) {
    let n1 = 0;
    let n2 = 1;
    let nextTerm = n1 + n2;
    for (let i = 1; i <= num; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}

console.log(fibonacciSeries(4));