// Reference Error
// A ReferenceError is thrown if you use (reference) a variable that has not been declared.

let x = 5;
try {
    x = y + 1;
} catch (err) {
    console.log(err.name);
    console.log(err.message);
}
// ReferenceError
// y is not defined