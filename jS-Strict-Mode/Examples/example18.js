// In strict mode, eval() can not declare a variable using the var keyword
"use strict";
eval ("var x = 2");
console.log(x);
// ReferenceError: x is not defined at Object.<anonymous> 