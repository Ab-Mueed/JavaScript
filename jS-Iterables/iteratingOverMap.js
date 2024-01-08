// Iterating Over a Map
// You can use a for..of loop to iterate over the elements of a Map.

const fruits = new Map([
    ['Apples', 500],
    ['Bananas', 300],
    ['Oranges', 200]
]);

for (const x of fruits) {
    console.log(x);
}
/*
[ 'Apples', 500 ]
[ 'Bananas', 300 ]
[ 'Oranges', 200 ]
*/