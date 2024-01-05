// Looping Array Elements
// One way to loop through an array, is using a 'for' loop.

const fruits = ['Banana', 'Apple', 'Orange', 'Grapes'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
/*
Banana
Apple
Orange
Grapes
*/

console.log('--------------------');

// Second Way is to use Array.forEach() function
function myFunction(value) {
    console.log(value);
}

fruits.forEach(myFunction);
/*
Banana
Apple
Orange
Grapes
*/

