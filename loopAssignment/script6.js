// Check if input variable is a number or not

function isValidNumber(num) {
    if(isNaN(num)) {   //check num is not a number
        console.log(`${num} is not a number`);
    }
    else {
        console.log(`${num} is a valid number`);
    }
}

isValidNumber(11);