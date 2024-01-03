// JavaScript Strings as Objects
// Strings can be defined as objects with the keyword 'new'.
let fName = new String('Abdul');
console.log(fName); // [String: 'Abdul']

// Avoid creating String objects, as it complicates the code and slows down the execution.

// String Objects can produce 'unexpected' Results.
let x = "Akhii";
let y = new String("Akhii");
console.log("x==y: " + (x == y)); // True
console.log(`x===y: ` + (x === y)); // False

// Comparing two jS Objects always returs 'False'.
let z = new String("Akhii");
console.log('z==y: ' + (z == y)); // False
console.log('z===y: ' + (z === y)); // False

