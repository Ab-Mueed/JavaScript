// Accessing Array Elements
// An array element can be accessed using the index number.
// Negative index returns 'undefined'.
// Index number greater than the Array length returns 'undefined'.

const mobileBrands = ['Samsung', 'Apple', 'Xiaomi'];
console.log(mobileBrands[0]); // Samsung
console.log(mobileBrands[-1]); // undefined
console.log(mobileBrands[3]); // undefined

// Accessing elements of an Array within an Array.
const fruits = ['Apple', 'Banana', 'Orange', ['Guava', 'Grapes', 'Pear']];

console.log(fruits[0][1]); // p
console.log(fruits[3][0]); // Guava
console.log(fruits[3][0][0]) // G
