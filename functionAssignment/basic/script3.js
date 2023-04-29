// 3. Write a function to convert Celsius to Fahrenheit Function `calFahrenheit()` returns the
// converted Celsius value to Fahrenheit value based on the formula `(Celsius × 9/5) + 32 =
// Fahrenheit`

function calFahrenheit(cel) {
  return (cel * 9) / 5 + 32; //Conversion formula
}
console.log(calFahrenheit(0)); //32
console.log(calFahrenheit(20)); //68
console.log(calFahrenheit(40)); //104
