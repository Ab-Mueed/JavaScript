// The endsWith() method returns 'true' if a string ends with a specified value otherwise it returns 'false'.
// Second Paramter can be the length of the first charcaters of the String to check from.
// It is Case-Sensitive.
// ES6 Feature
// It dosen't entertain -ve Parameters, it will return 'false' everytime.
// It will correctly return 'true' or 'false', even if the second parameter exceeds the String Length.
let text1 = "Hello world, welcome to the Universe.";

console.log(text1.endsWith('Universe.')); // true
console.log(text1.endsWith('world', 11)); // true
console.log(text1.endsWith('Universe.', -9)); // false
console.log(text1.endsWith('Universe.', 100)); // true


