// The get() Method
// The get() method gets the value of a key in a Map.

const fruits = new Map([
    ['Apple', 200],
    ['Apple', 400],
    ['Banana', 500]
]);
console.log(fruits); // Map(2) { 'Apple' => 400, 'Banana' => 500 }

console.log(fruits.get('Apple')); // 400
