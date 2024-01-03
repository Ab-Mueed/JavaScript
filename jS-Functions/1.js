// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).

// A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
// The parentheses may include parameter names separated by commas: (parameter1, parameter2, ...)

function myfunction(n1, n2) {
    // The code to be executed, by the function, is placed inside curly brackets: {}
    return n1 * n2;
    // When JavaScript reaches a return statement, the function will stop executing.
}

console.log(myfunction(10, 2)); // Refers to the function result.

// Accessing a function without () returns the function and not the function result.
console.log(myfunction); // [Function: myfunction] --> Refers to the function object.

// Variables declared within a JavaScript function, become LOCAL to the function.
// Local variables can only be accessed from within the function.
// Local variables are created when a function starts, and deleted when the function is completed.

