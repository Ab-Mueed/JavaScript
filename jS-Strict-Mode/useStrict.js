// JavaScript Use Strict
// "use strict" defines that JavaScript code should be executed in "strict mode".
// The "use strict" directive was new in ECMAScript version 5.
// It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.
// "use strict" is just a string, so IE 9 will not throw an error even if it does not understand it.
// Compiling a numeric literal (4 + 5;) or a string literal ("John Doe";) in a JavaScript program has no side effects. It simply compiles to a non existing variable and dies.
// So "use strict"; only matters to new compilers that "understand" the meaning of it.
// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

// What Basically is Strict Mode?
/*
> Strict mode makes it easier to write "secure" JavaScript.
> Strict mode changes previously accepted "bad syntax" into real errors.

> As an example, in normal JavaScript, mistyping a variable name creates a new global variable.
In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

> You can use strict mode in all your programs. It helps you to write cleaner code.
> In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.

> In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing
property, a non-existing variable, or a non-existing object, will throw an error.
*/


// Declaring Strict Mode
/*
> Strict mode is declared by adding "use strict" to the beginning of a script or a function.
> If declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode).
*/

// !!! WATCH OUT !!!
// The "use strict" directive is only recognized at the beginning of a script or a function.


