// Automatic replacing of expressions with real values is also called as string interpolation.

// Example 1
let pi = 3.14
let r = 5;

let circleArea = `The area of Circle is: ${pi * (r ** 2)}`;
console.log(circleArea); // The area of Circle is: 78.5

// Example 2
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`; // Here toFixed() is used to specify the  the number of digits after the decimal point. 
console.log(total); // Total: 12.50