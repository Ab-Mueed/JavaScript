// JavaScript Arrays
// An array is a special variable, which can hold more than one value.
// An array can hold many values under a single name, and you can access the values by referring to an index number.
// const array_name = [item1, item2, ....]
// It is a common practice to declare arrays with the const keyword.
// Array can have different data types as elements.
// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.


const webDev = ['Html', 'CSS', 'jS', 'React', 'Nodejs'];

// Spaces and line breaks are not important. A declaration can span multiple lines

const mL = [
    'Python',
    'Pandas',
    'numPy',
];

// You can also create an array, and then provide the elements.

const cars = [];
cars[0] = 'Creta';
cars[1] = 'XUV700';
cars[2] = 'Vitara';
console.log(cars); // [ 'Creta', 'XUV700', 'Vitara' ]

// An Array can also be created by using 'new' Keyword.
const mobileBrands = new Array('Samsung', 'Apple', 'Xiamo');
console.log(mobileBrands); // [ 'Samsung', 'Apple', 'Xiamo' ]

// The new keyword can produce some unexpected results.
// Create an Array with one Element using 'new' keyword?
/*
What will happen is that when you try to create an Array of one element using 'new' keyword
the syntax will assume that the parameter passed is not an element but the length of the
Array user wants.
*/
const points = new Array(40);
console.log(points); // [ <40 empty items> ]
// The above basically means to create an array with 40 undefined elements.

// Hence use the traditional method to create an Array of only one element.
const person = ['Octane'];
console.log(person); // [ 'Octane' ]



// typeof(Array)
console.log(typeof(cars)); // object

// Mixed Array
const mixedArray = [4, 'String', true, false];
console.log(mixedArray); // [4, 'String', true, false]

