// The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found.
// The indexOf() method is 'case-sensitive'.
// indexOf(String, Starting Position for Search)
// If the first parameter is omitted, it returns -1;
// Negative index as parameter does nothing, the search still starts from 0th position.
// If the index parameter is > the length of the String, it will still return -1.

let text1 = "Roses are red, Roses smell good";

console.log(text1.indexOf('roses')); // -1
console.log(text1.indexOf('Roses')); // 0
console.log(text1.indexOf()); // -1
console.log(text1.indexOf(" ")); // 5
console.log(text1.indexOf('Roses', -1)); // 0
console.log(text1.indexOf('Roses', 50)); // -1

