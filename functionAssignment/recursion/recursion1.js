// 1. Countdown from any number to 0
// The program starts the countdown from n to 0 while printing a number every second. 
// The recursive call “countDown(count-1)” is made inside callback function of the 
// setTimeout() function. The base condition ensures that the countdown ends once the 
// count is equal to 0.

function countdown(count) {
    console.log(count);
    if(count == 0) {
        return;
    }
    setTimeout(() => {countdown(count - 1)}, 1000);
}

console.log(countdown(10));
// 10 9 8 7 6 5 4 3 2 1 0
