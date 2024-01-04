// The Number.isSafeInteger() Method
// It belongs to JavaScript Number Object.
// The Number.isSafeInteger() method returns true if the argument is a safe integer.
// A safe integer is an integer that can be exactly represented as a double precision number.
/*
when we say "a safe integer," we mean an integer that falls within the safe range of representability
in the double-precision floating-point format without experiencing rounding errors or loss of precision. 
*/
// Safe integers are all integers from -(2^53 - 1) to +(2^53 - 1).

console.log(Number.isSafeInteger(10)); // true
console.log(Number.isSafeInteger(9007199254740991)); // true
console.log(Number.isSafeInteger(9007199254740992)); // false


