// NaN (Not A Number)
// NaN is a JavaScript reserved word indicating that a number is not a legal number.
// Trying to do arithmetic with a non-numeric string will result in NaN.
// JavaScript function isNaN() is used to find out if a value is a not a number.
// If you use NaN in a mathematical operation, the result will also be NaN.
// The interesting thing is that typeof(NaN) gives Number.

console.log(10 / 'Alpha'); // NaN
console.log(isNaN(10 / 'Alpha')); // true

console.log(100 / '10'); // This will Result in 10. For Context check numericString.js
console.log(isNaN(100 / '10')); // false

console.log(NaN / 10); // NaN
console.log(typeof (NaN)); // number

console.log(NaN + '5'); // NaN5




