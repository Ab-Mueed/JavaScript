// JavaScript Hoisiting
/* 
Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (to the
top of the current script or the current function).
*/

// JavaScript Declarations are Hoisted
/*
> In JavaScript, a variable can be declared after it has been used.
> In other words, a variable can be used before it has been declared.
*/


x = 5;
console.log(x); // 5
var x;



// JavaScript Initializations are Not Hoisted
/*
> JavaScript only hoists declarations, not initializations.
*/

// Example 1
var num1 = 5;
var num2 = 7;
console.log(num1 + " " + num2); // 5 7

// Example 2
var num3 = 4;
console.log(num3 + " " + num4); // 4 undefined
var num4 = 6;

// Explanantion of Above Examples:
/*
--> Does it make sense that num4 is undefined in the last example?
> This is because only the declaration (var num4), not the initialization (=6) is hoisted to the top.
> Because of hoisting, num4 has been declared before it is used, but because initializations are not hoisted, the value of num4 is 'undefined'.
*/


// Example 2 is the same as writing:
/*
var num3 = 5; // Initialize num3
var num4; // Declare num4
console.log(num3 +" "+ num4);
num4 = 7; // Assign 7 to num4
*/

// !!! DECLARE YOUR VARIABLES AT THE TOP !!!
/*
> If Hoisiting is not clear to the developer, programs may contain bugs(errors).
> To avoid bugs, always declare all variables at the beginning of every scope.
> Since this is how JavaScript interprets the code, it is always a good rule.
*/

