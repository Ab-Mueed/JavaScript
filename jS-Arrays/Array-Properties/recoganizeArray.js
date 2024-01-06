// Recognize an Array.
// The problem is that the JavaScript operator typeof returns "object".
// Two Methods to check if a Variable is an Array.

// 1) 
// Array.isArray()
// Returns 'true' if Array otherwise 'false'.
// Introduced in jS 2009 (ECMAScript 5)

const fruits = ['Apple', 'Orange', 'Banana'];
let x = 20;

console.log(Array.isArray(fruits)); // true
console.log(Array.isArray(x)); // false

// 2)
// instanceof
// The 'instanceof' operator returns 'true' if an object is created by a given constructor.

console.log(fruits instanceof Array); // true
console.log(x instanceof Array); // false 