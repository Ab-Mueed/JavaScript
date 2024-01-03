// Replacing String Content
let text1 = "Please visit Us!";
let text2 = "Please consider this option or that option";
let num = 46;

// 1)
// The replace() method replaces a specified value with another value in a string.
// The replace() method replaces only the first match.
// By default, the replace() method is case sensitive.
// To replace case insensitive, use a regular expression with an /i flag (insensitive).
// To replace all matches, use a regular expression with a /g flag (global match).
// Regular expressions are written without quotes.
// To replace a number, convert the number to a string first.

let replace1 = text1.replace("Us", "Me");
console.log(replace1); // Please visit Me!

let replace2 = text1.replace(/VISIT/i, 'wait for');
console.log(replace2); // Please wait for Us!

let replace3 = text2.replace(/option/g, "Perfume");
console.log(replace3); // Please consider this Perfume or that Perfume

// /ig can be Used Together.
let replace4 = text2.replace(/OPTION/ig, "Perfume"); // Please consider this Perfume or that Perfume 
console.log(replace4);

let text3 = num.toString();
let replace5 = text3.replace(4, 1);
console.log(replace5); // 16

let replace6 = text3.replace('46', '01');
console.log(replace6); // 01



// 2)
// In 2021, JavaScript introduced the string method replaceAll().
// The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
// If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.
let replaceAll1 = text2.replaceAll('option','Perfume');
console.log(replaceAll1); // Please consider this Perfume or that Perfume

let replaceAll2 = text2.replaceAll(/option/g,'Apartment'); 
console.log(replaceAll2); // // Please consider this Apartment or that Apartment



