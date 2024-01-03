// The match() method returns an array containing the results of matching a string against a string (or a regular expression).
// If a regular expression does not include the g modifier (global search), match() will return only the first match in the string.

let text1 = "Roses are red, Roses smell good";
console.log(text1.match('Roses'));
/*
[
  'Roses',
  index: 0,
  input: 'Roses are red, Roses smell good',
  groups: undefined
]
*/

console.log(text1.match(/Roses/));
/*
[
  'Roses',
  index: 0,
  input: 'Roses are red, Roses smell good',
  groups: undefined
]
*/

// Perfrom a Global Search for 'Roses'
console.log(text1.match(/Roses/g)); // [ 'Roses', 'Roses' ]

// Perform insensitive & Global Search for 'R' 
console.log(text1.match(/R/gi)); // [ 'R', 'r', 'r', 'R' ]

