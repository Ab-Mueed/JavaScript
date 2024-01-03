// Extracting String Characters
/*
There are 4 methods for extracting string characters:

1) The at(position) Method
2) The charAt(position) Method
3) The charCodeAt(position) Method
4) Using Property Access [] like in arrays
*/
let text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let text2 = `Do 'or' Die`;

// 1)
// The at(position) Method (Introduced in ES2022).
// If 'no' character is found, returns 'undefined'.
// Negative Indexing works. Subtract the specified index from the length of the String to get the character at that negative index.
console.log(text1.at(0)); // A
console.log(text1.at(-1)); // Z
console.log(text1.at(27)); // undefined

// 2)
// The charAt() method returns the character at a specified index (position) in a string.
// If 'no' character 'is found' it returns an 'Empty String'.
// Negative Indexing returns 'Empty String'.
console.log(text1.charAt(0)); // A
console.log(text2.charAt(4)); // o
console.log(text1.charAt(27)); // Empty String
console.log(text1.charAt(-4)); // Empty String

// 3)
// The charCodeAt() method returns the code of the character at a specified index in a string.
// Negative Indexing returns 'NaN'.
// If 'no' character is found, it returns 'NaN'.
console.log(text1.charCodeAt(0)); // Returns ASCII value of A: 65
console.log(text1.charCodeAt(-1)); // NaN
console.log(text1.charCodeAt(28)); // NaN

// 4)
// Property Access []
// Propert Access might be unpredictable.
// It makes Strings look like Array (but they are not).
// If no character is found, it returns 'undefined'.
// Negative Indexing returns 'undefined'.
// It is Read only.
console.log(text2[0]); // D
text2[0] = 'A'; // Gives no error, but does nothing!
console.log(text2); // Returns Original String
console.log(text2[-6]); // Undefined