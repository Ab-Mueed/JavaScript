// Number() Method
// It's not a Number Method but a Global jS Method.
// The Number() method can be used to convert JavaScript variables to numbers.
// If the number cannot be converted, NaN is returned.
// Number() can also convert a date to a number.

console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number("10")); // 10
console.log(Number("  10")); // 10
console.log(Number("10  ")); // 10
console.log(Number(" 10  ")); // 10
console.log(Number("10.33")); // 10.33
console.log(Number("10,33")); // NaN
console.log(Number("10 33")); // NaN
console.log(Number("John")); // NaN
console.log(Number('A')); // NaN

// Date to Number
console.log(Number(new Date("1970-01-01"))); // 0
console.log(Number(new Date("2017-09-30"))); // 1506729600000

