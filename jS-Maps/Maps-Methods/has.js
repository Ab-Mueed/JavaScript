// The has() Method
// The has() method returns true if a key exists in a Map.

const fruits = new Map([
    ['Apple', 200],
    ['Grapes', 300],
    ['Banana', 500]
]);

console.log(fruits.has('Apple')); // true
console.log(fruits.has('Oranges')); // false