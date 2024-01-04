// ParseInt() Method
// It's not a Number Method but a Global jS Method.
// parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned.
// If the number cannot be converted, NaN is returned.

console.log(parseInt("-10")); // -10
console.log(parseInt("-10.33")); // -10
console.log(parseInt("10")); // 10
console.log(parseInt("10.33")); // 10
console.log(parseInt("10000.2345")); // 10000
console.log(parseInt("10 20 30")); // 10
console.log(parseInt("10 years")); // 10
console.log(parseInt("years 10")); // NaN