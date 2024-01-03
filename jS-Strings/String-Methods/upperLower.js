// Converting to Upper and Lower Case
// A string is converted to upper case with toUpperCase().
// A string is converted to lower case with toLowerCase().

let text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let text2 = `Hardwork is the key to Success`;
let text3 = '1234 Hello';
let text4 = undefined;
let text5 = null;

// 1) toUpperCase()
console.log(text2.toUpperCase()); // HARDWORK IS THE KEY TO SUCCESS
console.log(text3.toUpperCase()); // 1234 HELLO
// console.log(text4.toUpperCase()); // Results in Type Error
// console.log(text5.toUpperCase()); // Results in Type Error  


// 2) toLowerCase()
console.log(text1.toLowerCase()); // abcdefghijklmnopqrstuvwxyz
console.log(text2.toLowerCase()); // hardwork is the key to success
console.log(text3.toLowerCase()); // 1234 hello
// console.log(text4.toLowerCase()); // Results in Type Error
// console.log(text5.toLowerCase()); // Results in Type Error


