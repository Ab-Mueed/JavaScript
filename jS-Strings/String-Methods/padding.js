// Added to jS in 2017.
let text1 = "JavaScript";
let num = 5;


// 1)
// The padStart() method pads a string from the start.
// It pads a string with another string (multiple times) until it reaches a given length.
// To pad a number, convert the number to a string first.
// If the second parameter is omited, by default it provides spaces.
// If the padding length is less than the String length, it returns the Original String.
// Negative Parameter returns Original String.
console.log(text1.padStart(11,'!')); //!JavaScript
console.log(text1.padStart(11,'!').length); // 11
console.log(text1.padStart()); // Returns Original String
console.log(text1.padStart(13).length); // 13
console.log(text1.padStart('!')); // Returns Original String
console.log(text1.padStart(-20)); // Returns Original String
// console.log(num.padStart(4,'!')); // Error
let text2 = num.toString();
console.log(text2.padStart(4,'!')); // !!!5


console.log(`-----------------------------------`);



// 2)
// The padEnd() method pads a string from the end.
// It pads a string with another string (multiple times) until it reaches a given length.
// To pad a number, convert the number to a string first.
// If the second parameter is omited, by default it provides spaces.
// If the padding length is less than the String length, it returns the Original String.
// Negative Parameter returns Original String.
console.log(text1.padEnd(11,'!')); // JavaScript!
console.log(text1.padEnd(11,'!').length); // 11
console.log(text1.padEnd()); // Returns Original String
console.log(text1.padEnd(13).length); // 13
console.log(text1.padEnd('!')); // Returns Original String
console.log(text1.padEnd(-20)); // Returns Original String
console.log(text2.padEnd(4,'!')); // 5!!!

