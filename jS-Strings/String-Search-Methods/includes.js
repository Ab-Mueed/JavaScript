// The includes() method returns 'true' if a string contains a specified value otherwise it return 'false'.
// string.includes(String, Starting index for Search)
// It is case-Sensitive.
// An empty string "" is considered to be a substring of any string. This means that every string technically includes the empty string.
// You cannot pass first Parameter as Regular Expression, it will raise an Error.
// If you pass first Parameter as simple String and second Parameter as Regular Expression, no Error will raise, it will simply check for the presence of First Parameter.
// If the Second Parameter is > the length of String, it always will return False, except in case of Empty String as Parameter.
// If the second parameter is -ve, it dosen't matter whatever the number is, it will always search for the String.
// ES6 Feature
let text1 = "Roses are red, Roses smell good";
let text2 = '146';

console.log(text1.includes('Roses')); // true
console.log(text1.includes('roses')); // false
console.log(text1.includes('Roses', 17)); // true
console.log(text1.includes(" ")); // true
console.log(text1.includes("")); // true
console.log(text1.includes("R",/Roses/g)); // true
console.log(text1.includes('Roses', 40)); // false
console.log(text1.includes('', 40)); // true
console.log(text1.includes('R', -100)); // true


console.log(text2.includes(1)); // true
console.log(text2.includes('1')); // true

