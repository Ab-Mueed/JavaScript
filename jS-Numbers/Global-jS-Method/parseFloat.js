// ParseFloat() Method
// It's not a Number Method but a Global jS Method.
// parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned.
// If the number cannot be converted, NaN is returned.

console.log(parseFloat("10")); // 10
console.log(parseFloat("10.33")); // 10.33
console.log(parseFloat("10000.2345")); // 10000.2345
console.log(parseFloat("10000.2345.678")); // 10000.2345
console.log(parseFloat("10 20 30")); // 10
console.log(parseFloat("10 years")); // 10
console.log(parseFloat("years 10")); // NaN