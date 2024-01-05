// Adding Array Elements
// One Way is to add a new element to an array using the push() method.
// The push() method adds the new element from the end of the Array.

const fruits = ["Banana", "Orange", "Apple"];
fruits.push('Lemon');
console.log(fruits); // [ 'Banana', 'Orange', 'Apple', 'Lemon' ]

// Second Way is using 'length' Property

fruits[fruits.length] = 'Grapes';
console.log(fruits); // [ 'Banana', 'Orange', 'Apple', 'Lemon', 'Grapes' ]

// !!!! Note !!!!
// Adding elements with high indexes can create undefined "holes" in an array.

const cars = ['Creta', 'Vitara', 'XUV700'];
cars[6] = 'Fortuner';
console.log(cars); // [ 'Creta', 'Vitara', 'XUV700', <3 empty items>, 'Fortuner' ]

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
/*
Creta
Vitara
XUV700
undefined
undefined
undefined
Fortuner
*/