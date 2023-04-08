// Write a JavaScript conditional statement to find the sign of product of three numbers.

function findSign(x, y, z) {
  if (x > 0 && y > 0 && z > 0) {
    console.log("The sign is +");
  } else if (x < 0 && y < 0 && z < 0) {
    console.log("The sign is -");
  } else if (x > 0 && y < 0 && z < 0) {
    console.log("The sign is +");
  } else if (x < 0 && y > 0 && z < 0) {
    console.log("The sign is +");
  } else {
    console.log("The sign is -");
  }
}

findSign(1, -2, -3);
