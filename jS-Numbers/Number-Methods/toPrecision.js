// The toPrecision() Method
// toPrecision() returns a String, with a number written with a specified length.
// toPrecision() argumnet must be between 1 & 100.

let x = 123.456;
console.log(x.toPrecision()); // 123.456
console.log(x.toPrecision(1)); // 1e+2
console.log(x.toPrecision(2)); // 1.2e+2
console.log(x.toPrecision(4)); // 123.5
console.log(x.toPrecision(6)); // 123.456
console.log(typeof (x.toPrecision(3))); // String 