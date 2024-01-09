// JavaScript Throws Error
// When an error occurs, JavaScript will normally stop and generate an error message.
// The technical term for this is: JavaScript will throw an exception (throw an error).
// JavaScript will actually create an Error object with two properties: name and message.

// The throw statement
// The throw statement allows you to create a custom error.
// Technically you can throw an exception (throw an error).
// The exception can be a JavaScript String, a Number, a Boolean or an Object.
// 'Throw' can be used with 'try-catch' to control the program flow and generate custom error messages.

try {
    if (isNaN('A' / 4)) throw 'Not a Number';
} catch (err) {
    console.log(err);
}
// Not a Number

let text = '';

try {
    if (text == '') throw 'Empty String';
} catch (err) {
    console.log(err);
}
// Empty String