// Arrays & Objects
// Arrays are a special type of objects with numbered indexes.
// Array Elements can be Objects.

// You can have:
/*
1) Objects in an Array
2) Functions in an Array
3) Arrays in an Array
*/
const fruits = ['Apple', 'Banana', 'Orange'];

function myfunction() {
    console.log('myfunction()');
}

const myArray = [Date.now, myfunction, fruits];
console.log(myArray);
/*
[
  [Function: now],
  [Function: myfunction],
  [ 'Apple', 'Banana', 'Orange' ]
]
*/

// Accessing element of an Array within an Array.
console.log(myArray[2][0]); // Apple