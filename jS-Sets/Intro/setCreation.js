// Creating a Set
/*
> You can create a JavaScript Set by:

1) Passing an Array to new Set()
2) Create a new Set and use add() to add values
3) Create a new Set and use add() to add variables
*/


// 1)
// Passing an Array to new Set() constructor
const letters = new Set(['a', 'b', 'c']);
console.log(letters); // Set(3) { 'a', 'b', 'c' }
console.log(typeof (letters)); // Object



// 2)
// Create a new Set and use add() to add values
const numbers = new Set();
console.log(numbers); // Set(0) {}

numbers.add(1);
numbers.add(2);
numbers.add(3);
console.log(numbers); // Set(3) { 1, 2, 3 }



// 3)
// Create a new Set and use add() to add variables
const vowels = new Set();

const a = 'a';
const e = 'e';
const i = 'i';
const o = 'o';
const u = 'u';

vowels.add(a);
vowels.add(e);
vowels.add(i);
vowels.add(o);
vowels.add(u);
console.log(vowels); // Set(5) { 'a', 'e', 'i', 'o', 'u' }

