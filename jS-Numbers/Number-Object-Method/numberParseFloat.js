// The Number.ParseFloat() Method
// Number.parseFloat() parses a string and returns a number.
// Spaces are allowed. Only the first number is returned.
// If the number cannot be converted, NaN is returned.
// This method is same as parseFloat() Global jS Method, but why it is used is explained below:
/*
1) By associating this method with the Number object, JavaScript aims to organize and modularize 
   global functions. It provides a clearer structure for the language, making it more maintainable and 
   enhancing code organization.

2) This modularization is particularly useful when JavaScript code needs to be reused in different
   contexts, such as server-side JavaScript or non-browser environments.

3) By having these methods as properties of the Number object, it makes it easier for developers to 
   understand and use the language consistently across various environments.
*/

console.log(Number.parseFloat("10")); // 10
console.log(Number.parseFloat("10.33")); // 10.33
console.log(Number.parseFloat('10.33.45')); // 10.33
console.log(Number.parseFloat("10 20 30")); // 10
console.log(Number.parseFloat("10 years")); // 10
console.log(Number.parseFloat("years 10")); // NaN
console.log(Number.parseFloat("-10")); // -10
console.log(Number.parseFloat("-01")); // -1