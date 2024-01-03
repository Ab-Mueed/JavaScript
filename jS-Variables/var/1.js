// var was used in jS from 1995 to 2015.
// var should only be used if working with older browsers.
// var allows re-declaring of variables.
// Variables declared with the var always have Global Scope.
// Variables declared with the var keyword can NOT have block scope.
    // It means redeclaring a variable inside a block will also redeclare the variable outside the block.
// Variables defined with var are hoisted to the top and can be initialized at any time.
    // Meaning: You can use the variable before it is declared.

var x = 5;
var y = 6;
var z = x + y;
console.log(z); // 11

var r = 30;
var r = 9; // No Error :). Re-decalration allowed.


var t = 10;
console.log("Value of t before Block Scope: " + t); // 10
{
    var t = 20;
    console.log("Value of t in Block Scope: " + t); // 20
}
console.log("Value of t after Block Scope: " + t); // 20


// Can be used before Declaration.
m = 'm';
console.log(m); // m
var m;
