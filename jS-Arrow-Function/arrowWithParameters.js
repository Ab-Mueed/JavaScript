// Arrow Function with Parameters
// If you have parameters, you pass them inside the parentheses.
// In fact, if you have only one parameter, you can skip the parentheses as well.

fxn1 = val => 'Fxn1 ' + val;
console.log(fxn1(146)); // Fxn1 146

fxn2 = (val1,val2) => 'Fxn2 ' + val1 +" "+ val2;
console.log(fxn2(146)); // Fxn2 146 undefined
console.log(fxn2(146,6653)); // Fxn2 146 6653
