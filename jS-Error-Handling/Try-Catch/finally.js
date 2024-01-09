// The finally Statement
// The finally statement lets you execute code, after try and catch, regardless of the result.

// Syntax
/*
try {
    // block of code to try
}
catch(err) {
    // block of code to handle errors
}
finally {
    // Block of code to be executed regardless of the try / catch result
}
*/

try {
    console.logl('Try');
} catch (err) {
    console.log(err.message);
}
finally {
    console.log('Whatever the Error Occurred, I at least got Executed, uff!');
}
/*
console.logl is not a function
Whatever the Error Occurred, I at least got Executed, uff!
*/


// Try-Catch come in pairs, but we can omit 'catch' if we use 'try' with 'finally'. 

// Try without Error
try {
    console.log('Try');
} finally {
    console.log('I am Finally of Try without Error');
}
/*
Try
I am Finally of Try without Error
*/

// Try with Error
try {
    console.logl('Try')
} finally {
    console.log('I am Finally of Try with Error')
}
/*
I am Finally of Try with Error
TypeError: console.logl is not a function
*/