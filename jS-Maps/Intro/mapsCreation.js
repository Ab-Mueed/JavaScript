// Maps Creation
// JavaScript Map can be created using
/*
1) Passing an Array to new Map()
2) Create a Map and use Map.set()
*/



// 1)
// Passing an Array to new Map()

const fruits = new Map([
    ['apples', 500],
    ['banana', 300],
    ['oranges', 200]
]);
console.log(fruits); // Map(3) { 'apples' => 500, 'banana' => 300, 'oranges' => 200 }


// 2)
// Create a Map and use Map.set()


const cars = new Map();
cars.set('BMW', 500);
cars.set('Banana', 300);
cars.set('Mercedes', 400);
console.log(cars); // Map(3) { 'BMW' => 500, 'Banana' => 300, 'Mercedes' => 400 }
