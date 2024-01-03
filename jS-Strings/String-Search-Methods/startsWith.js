// The startsWith() method returns 'true' if a string begins with a specified value, otherwise it returns 'false'.
// It is Case-Sensitive.
// A start position for the search can be specified as the second parameter.
// ES6 Feature.

let text1 = "Hello world, welcome to the Universe.";

console.log(text1.startsWith('Hello')); // true
console.log(text1.startsWith('H')); // true
console.log(text1.startsWith('h')); // false
console.log(text1.startsWith('world')); // false

console.log(text1.startsWith('world', 5)); // false
console.log(text1.startsWith('world', 3)); // false
console.log(text1.startsWith('world', 6)); // true

// Dosen't matter if the second Parameter is -ve, unless the first Parameter is the Starting of the String. It will always return 'true'. Otherwise 'false'.
console.log(text1.startsWith('Hello', -1)); // true
console.log(text1.startsWith('Hello', -100)); // true

console.log(text1.startsWith('Universe.', -1)); // false
console.log(text1.startsWith('Universe.', -9)); // false
console.log(text1.startsWith('Universe.', -100)); // false


