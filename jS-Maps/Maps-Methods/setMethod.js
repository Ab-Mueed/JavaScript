// The set() Method 
// You can add elements to a Map with the set() method.
// The set() method can also be used to change existing Map values.

const fruits = new Map();

fruits.set('Apples', 500);
fruits.set('Bananas', 300);
fruits.set('Oranges', 200);

console.log(fruits); // Map(3) { 'Apples' => 500, 'Bananas' => 300, 'Oranges' => 200 }

fruits.set('Apples', 200);

console.log(fruits); // Map(3) { 'Apples' => 200, 'Bananas' => 300, 'Oranges' => 200 }

