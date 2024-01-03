// There are 3 methods for extracting a part of a string:
/*
1) slice(start, end)
2) substring(start, end)
3) substr(start, length)
*/

let text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let text2 = `Do 'or' Die`;

// 1)
// slice() 'extracts' a part of a string and 'returns' the 'extracted part' in a 'new string'.
// The method takes 2 parameters: start position, and end position (end not included).
// If you omit the second parameter, the method will slice out the rest of the string.
// If a parameter is negative, the position is counted from the end of the string.
// If start position index is > end position index, it returns 'Empty String'.
// If start position index is -ve and end position index is +ve, it returns 'Empty String'. 
console.log('slice():');
console.log(text1.slice(0, 3)); // ABC
console.log(text1.slice(7)); // HIJKLMNOPQRSTUVWXYZ
console.log(text1.slice(-12, -6)); // OPQRST
console.log(text1.slice(25, 10)); // Empty String
console.log(text1.slice(-6, -12)); // Empty String
console.log(text1.slice(-1, 21)); // Empty String
console.log(text1.slice(21, -1)); // VWXY



// 2)
// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().
// The method takes 2 parameters: start position, and end position (end not included).
// If you omit the second parameter, substring() will slice out the rest of the string.
// If starting index is +ve and ending index is -ve, it returns string from index 0 upto +ve index(excluding the +ve index).
console.log('substring():');
console.log(text1.substring(0, 3)); // ABC
console.log(text1.substring(7)); // HIJKLMNOPQRSTUVWXYZ
console.log(text1.substring(-1)); // ABCDEFGHIJKLMNOPQRSTUVWXYZ
console.log(text1.substring(-500)); // ABCDEFGHIJKLMNOPQRSTUVWXYZ
console.log(text1.substring(-1, 3)); // ABC , Same as substring(0,3)
console.log(text1.substring(-1, -50)); // Empty String
console.log(text1.substring(7, -1)); // ABCDEFG



// 3)
// substr() is similar to slice().
// The difference is that the 'second parameter' specifies the 'length' of the extracted part.
// If you omit the second parameter, substr() will slice out the rest of the string.
// If the first parameter is negative, the position counts from the end of the string.
// If both the parameters are negative it will return 'Empty String'.
console.log('substr():');
console.log(text1.substr(0, 3)); // ABC
console.log(text1.substr(7)); // HIJKLMNOPQRSTUVWXYZ
console.log(text1.substr(-1)); // Z
console.log(text1.substr(-3)); // XYZ
console.log(text1.substr(-500)); // ABCDEFGHIJKLMNOPQRSTUVWXYZ
console.log(text1.substr(-6, -3)); // Empty String
console.log(text1.substr(-6, 3)); // UVW




