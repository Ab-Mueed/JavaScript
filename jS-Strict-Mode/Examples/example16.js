// The 'this' keyword in functions behaves differently in strict mode.
// The this keyword refers to the object that called the function.
// If the object is not specified, functions in strict mode will return undefined and functions in normal mode will return the global object (window).

"use strict";
function myFunction() {
  alert(this); 
  // will alert "undefined"
}
myFunction();
// ReferenceError: alert is not defined
