// The forEach() Method
// The forEach() Method calls a function for each key/value pair in a Map.

const fruits = new Map([
    ['Apple', 200],
    ['Grapes', 300],
    ['Banana', 500]
]);

fruits.forEach(function (value, key) {
    console.log(key + " " + value)
})
/*
Apple 200
Grapes 300
Banana 500
*/