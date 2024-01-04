// Number.isInteger()
// It belongs to JavaScript Number Object.
// Returns true if the argument is an integer.
// Number Methods cannot be used on Variables.
// This can only be accessed like Number.isInteger()
// Using variable.isInteger(), will result in error (TypeError variable.isInteger is not a Function)


console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); // false
console.log(Number.isInteger('A')); // false
console.log(Number.isInteger(-1)); // true
