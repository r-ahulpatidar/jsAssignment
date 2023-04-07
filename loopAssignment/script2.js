// Q2. Write a JavaScript conditional statement to find the largest of five numbers.

function findLargest(a, b, c, d, e) {
    if(a > b && a > c && a > d && a > e) {
        console.log(a);
    }
    else if (b > a && b > c && b > d && b > e) {
        console.log(b);
    }
    else if (c > a && c > b && c > d && c > e) {
        console.log(c);
    }
    else if (d > a && d > b && d > c && d> e) {
        console.log(d);
    }
    else {
        console.log(e);
    }
}
findLargest(12, 0, 7, 9, 10);
