// Type Error
// A TypeError is thrown if an operand or argument is incompatible with the type expected by an operator or function.

let num = 1;
try {
    num.toUpperCase();   // You cannot convert a number to upper case
}
catch (err) {
    console.log(err.name);
    console.log(err.message);
}
// TypeError
// num.toUpperCase is not a function