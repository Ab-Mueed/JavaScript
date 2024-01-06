// Associative Arrays
// Arrays with named indexes are called associative arrays (or hashes).
// JavaScript does not support arrays with named indexes.
// In JavaScript, arrays always use numbered indexes.

const fruits = [];
fruits[0] = 'Apple';
fruits[1] = 'Banana';
fruits[2] = 'Grapes';
console.log(fruits.length); // 3
console.log(typeof(fruits)); // Object
console.log(fruits); // [ 'Apple', 'Banana', 'Grapes' ] 
console.log(fruits[0]); // Apple


// !!!!!! WARNING !!!!!!

// If you use named indexes, JavaScript will redefine the array to an object.
// Some array methods and properties will produce incorrect results.

const person = [];
person['fName'] = 'Alpha';
person['lName'] = 'Male';
person['age'] = 24;
console.log(person.length); // 0
console.log(person['fName']); // Alpha
console.log(person[0]); // undefined

