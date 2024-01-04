// Addition of Numbers & Strings
// If you add two numbers, the result will be a number.
// If you add two strings, the result will be a string concatenation.
// If you add a number and a string or vice-versa, the result will be a string concatenation.

let num1 = 1;
let num2 = 46;
let result1 = num1 + num2;
console.log(result1); // 47

let str1 = '1';
let result2 = str1 + num2;
console.log(result2); // 146

// Some Common Mistakes:

// Example 1
let result3 = 'The Result is: ' + num1 + num2; // We expect it to be: The Result is: 47 , but thats wrong.
console.log(result3); // The Result is: 146

// Example 2
let result4 = num1 + num2 + ' is the Result'; // Now after seeing the above example we expect it to be: 146 is the Result, but thats wrong again.
console.log(result4); // 47 is the Result

// Reasoning For the Above Results:

/*
> The JavaScript Interpreter works from left to right.
> For the Example 1, it first encounters String and hence hereforth everything is String for it, thats why Concatenation takes place.
> For the Exaple 2, first 1 + 46 is added because num1 and num2 are both numbers.
> Then it encounters a String, i.e,'is the Result', and hence it concatenates 47 with it.
*/



