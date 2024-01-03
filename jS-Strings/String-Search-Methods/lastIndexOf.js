// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string.
// lastIndexOf() return -1 if the text is not found.
// lastIndexOf(String, Starting Position for Search)
// The lastIndexOf() methods searches backwards (from the end to the beginning).
// Negative index as parameter makes the search start from 0th position.
// If the index parameter is > the length of the String, it will still return correct position of the specified String.

let text1 = "Roses are red, Roses smell good";

console.log(text1.lastIndexOf('Roses')); // 15
console.log(text1.lastIndexOf('Roses', 14)); // 0
console.log(text1.lastIndexOf('Roses', -1)); // 0
console.log(text1.lastIndexOf('Roses', 50)); // 15