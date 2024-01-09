// JavaScript try and catch
// The JavaScript statements try and catch come in pairs.
// The 'try' statement allows you to define a block of code to be tested for errors while it is being executed.
// The 'catch' statement allows you to define a block of code to be executed, if an error occurs in the try block.

// Syntax
/*
try {
    // Block of Code to try
}
catch(err) {
    // Block of code to handle errors
}
*/

// In the below Example, JavaScript catches 'console.logl' as an error, and executes the catch code to handle it.
try {
    console.logl('Try');
} catch (err) {
    console.log(err.message);
}
// OUtput--> console.logl is not a function
