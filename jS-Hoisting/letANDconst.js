// The 'let' and 'const' Keywords
// Variables defined with let and const are hoisted to the top of the block, 'but not initialized'.
    // Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
// Using a 'let' variable before it is declared will result in a 'ReferenceError'.
// Using a 'const' variable before it is declared, is a 'syntax error', so the code will simply not run.
// The variable is in a "temporal dead zone" from the start of the block until it is declared.

// Example 1
fName = 'Alpha';
let fName;
console.log(fName); // ReferenceError: Cannot access 'fName' before initialization

lName = 'Male';
// const lName; // SyntaxError: Missing initializer in const declaration
// Removing comment from above statement will result in Error


