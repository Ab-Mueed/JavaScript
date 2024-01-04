// The toExponential() Method
// toExponential() returns a string, with a number rounded and written using exponential notation.
// A parameter defines the number of characters behind the decimal point.
// The parameter is optional. If you don't specify it, JavaScript will not round the number.


let exp = 3.14;
console.log(exp.toExponential(2)); // 3.14e+0

console.log(exp.toExponential(3)); // 3.140e+0

console.log(exp.toExponential(4)); // 3.1400e+0