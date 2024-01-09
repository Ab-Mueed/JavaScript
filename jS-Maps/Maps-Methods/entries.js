// The entries() Method
// The entries() method returns an iterator object with the [key, values] in a Map.

const fruits = new Map([
    ['Apple', 200],
    ['Grapes', 300],
    ['Banana', 500]
]);

for (const x of fruits.entries()) {
    console.log(x);
}
/*
[ 'Apple', 200 ]
[ 'Grapes', 300 ]
[ 'Banana', 500 ]
*/