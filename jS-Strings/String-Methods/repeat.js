// JavaScript String repeat()
// ES6 Feature, intorduced in 2015
let text1 = "JavaScript";
let text2 = "Hello World!";
let num = 5;

// The repeat() method returns a string with a number of copies of a string.
// string.repeat(count)
// If count is omitted, it will return 'Empty String'.
// If String is passed as count parameter, it will return 'Empty String'.
// If -ve value is passed, it will return 'Ivalid Count Error'.
// To repeat a number, convert the number to a string first.

let result1 = text1.repeat(2);
console.log(result1); // JavaScriptJavaScript
console.log(result1.length); // 20


let result2 = text2.repeat(2);
console.log(result2); // Hello World!Hello World!
console.log(result2.length); // 24

let result3 = text1.repeat(); // count omitted
console.log(result3); // Empty String

let result4 = text1.repeat('Hi');
console.log(result4); // Empty String

let result5 = text1.repeat(0); // Count = 0
console.log(result5); // Empty String

// let result6 = text1.repeat(-1);
// console.log(result6); // Gives Invalid Count Value Error

let text3 = num.toString();
let result7 = text3.repeat(2);
console.log(result7); // 55
