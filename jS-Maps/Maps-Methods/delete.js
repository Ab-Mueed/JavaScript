// The delete() Method
// The delete() method removes a Map element.

const fruits = new Map([
    ['Apple', 200],
    ['Grapes', 300],
    ['Banana', 500]
]);
fruits.delete('Apple');
console.log(fruits); // Map(2) { 'Grapes' => 300, 'Banana' => 500 }