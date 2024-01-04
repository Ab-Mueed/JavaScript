// JavaScript Numbers as Objects.
// Numbers be defined as objects with the keyword 'new'.
// Do not create Number objects. The 'new' keyword complicates the code and slows down execution speed.


let x = new Number(146);
console.log(x); // [Number: 146]
console.log(typeof (x)); // object

let y = 146;
let z = new Number(146);

// Number Objects can produce unexpected results:
// Comparing two JavaScript objects always returns false.

// When using the == operator, x and y are equal
console.log(x == y); // true

// When using the === operator, x and y are not equal.
console.log(x === y); // false

// When using the == operator, x and z are not equal
console.log(x == z); // false

// When using the === operator, x and z are not equal
console.log(x === z); // false




