// For security reasons, eval() is not allowed to create variables in the scope from which it was called.
"use strict";
eval ("x = 2");
// ReferenceError: x is not defined at eval (eval at <anonymous>