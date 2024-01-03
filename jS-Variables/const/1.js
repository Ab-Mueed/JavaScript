// const was added to jS in 2015.
// These are constant values and cannot be changed.
// Always use const if the value should not be changed.
// Always use const if the type should not be changed (Arrays and Objects).
// const does not allow re-declaring a variable.
// A const variable cannot be reassigned.
// JavaScript const variables must be assigned a value when they are declared.
// const does not define a constant value. It defines a constant reference to a value.
// Declaring a variable with const is similar to let when it comes to Block Scope.
// Redeclaring an existing var or let variable to const, in the same scope, is not allowed.
// Variables defined with const are also hoisted to the top, but not initialized.
// Meaning: Using a const variable before it is declared will result in a ReferenceError.

const x = 5;
const y = 6;
const z = x + y;
console.log(z);

const r = 20;
// r = 21; // Will not allow Reassigning the Value of r
console.log(r);
// const r; // Will not allow Re-declaration of r.

// const month; // Needs to be asssigned with some value when declaring the variable, will result in 'Error' otherwise.


const u = 20;
console.log("u Before Block Scope: " + x);
{
    const u = 30;
    console.log("u After Block Scope: " + x);
}
console.log("u After Block Scope: " + x);



var i = 'i of var';
// const i = 'i of const'; // Removing comment from this statement will result in error.


let p = 'p of let';
// const p = 'p of const';  // Removing comment from this statement will result in error.

m = 'm';
const m = 30; // Will raise an error because Hoisting is done on top, but not initialised yet.





