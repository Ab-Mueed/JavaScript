// eval() can not declare a variable using the let keyword
eval ("let x = 2");
console.log(x); 
// ReferenceError: x is not defined at Object.<anonymous>