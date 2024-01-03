// String to an Array
// If you want to work with a string as an array, you can convert it to an array.
// A string can be converted to an array with the split() method.
// string.split(separator)
// If the separator is omitted, the returned array will contain the whole string in index [0].
// If the separator is "", the returned array will be an array of single characters.

let text1 = "Hardwork Is The Key To Success";
console.log(text1.split(",")); // [ 'Hardwork Is The Key To Success' ]
console.log(text1.split(" ")); // [ 'Hardwork', 'Is', 'The', 'Key', 'To', 'Success' ]
console.log(text1.split("|")); // [ 'Hardwork Is The Key To Success' ]
console.log(text1.split("")); 
/* 
[
    'H', 'a', 'r', 'd', 'w', 'o',
    'r', 'k', ' ', 'I', 's', ' ',     
    'T', 'h', 'e', ' ', 'K', 'e',     
    'y', ' ', 'T', 'o', ' ', 'S',     
    'u', 'c', 'c', 'e', 's', 's'      
]
*/ 

console.log(text1.split()); // [ 'Hardwork Is The Key To Success' ]
