// Range Error
// A RangeError is thrown if you use a number that is outside the range of legal values.

let num = 1;
try {
    num.toPrecision(500);
} catch (err) {
    console.log(err.name);
    console.log(err.message);
}
// RangeError
// toPrecision() argument must be between 1 and 100
