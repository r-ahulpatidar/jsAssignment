// 5. Write a function to find the area and perimeter of a Circle.
// Function `circleValues()` returns the perimeter and area of the circle provided the radius as an
// argument for the function call.

function circleValues(rad) {
  return `Perimeter: ${2 * Math.PI * rad}, Area: ${Math.PI * rad * rad}`;
}
console.log(circleValues(10)); //"Perimeter: 62.83, Area: 314.15"
console.log(circleValues(15)); //"Perimeter: 94.24, Area: 706.85"
console.log(circleValues(25)); //"Perimeter: 157.07, Area: 1963.49"
