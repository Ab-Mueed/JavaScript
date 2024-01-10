let num1 = 3.14;
myfunction();

// Declared inside a function, it has local scope (only the code inside the function is in strict mode)
function myfunction() {
    "use strict";
    num2 = 3.14; // ReferenceError: num2 is not defined
}