// Interpolation
// Template String provide an easy way to interpolate variables and expressions into strings.
// Automatic replacing of variables with real values is called string interpolation
// The Syntax is ${...}

let text1 = 'Java';
let text2 = 'Script'

let fullText1 = `Welcome to ${text1}${text2} Course!`;
console.log(fullText1); // Welcome to JavaScript Course!

let text3 = `Inter`;
let text4 = `polation`;

let fullText2 = `${text3}${text4}`;
console.log(fullText2); // Interpolation

// If we give substitute more than one variable in ${} separated by commas, it will substitute the last passed variable.
let fullText3 = `${text3,text4}`; // It will substitute text4
console.log(fullText3); // polation




