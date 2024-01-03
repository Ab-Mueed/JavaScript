// The search() method searches a string for a string (or a regular expression) and returns the position of the match.
// The search() method cannot take a second start position argument.
let text1 = "Roses are red, Roses smell good";
console.log(text1.search('Roses')); // 0
console.log(text1.search(/Roses/)); // 0
console.log(text1.search(/roses/i)); // 0
console.log(text1.search(/Roses/g)); // 0

