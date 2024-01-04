// The valueOf() Method
// valueOf() returns a number as a number. 
// The valueOf() method is used internally in JavaScript to convert Number objects to primitive value.

let x = 123;
console.log(x.valueOf()); // 123
console.log((123).valueOf()); // 123
console.log((100 + 23).valueOf()); // 123

let y = new Number(146);
console.log(typeof (y)); // object
console.log(typeof (y.valueOf())); // number
