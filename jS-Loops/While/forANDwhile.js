// For V/s While
// A 'while' loop is much the same as a 'for' loop, with expression 1 and expression 3 omitted.
// For understanding what expression 1 and expression 3 signify, check 'for.js' in 'For-Loop' Directory.

const cars = ['BMW', 'Audi', 'Mercedes'];

// For Loop
let i = 0;
for (; cars[i];) {
    console.log(cars[i]);
    i++;
}
/*
BMW
Audi
Mercedes
*/



// While Loop
let j = 0;
while (cars[j]) {
    console.log(cars[j]);
    j++;
}
/*
BMW
Audi
Mercedes
*/