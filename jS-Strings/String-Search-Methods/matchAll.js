// matchAll() is an ES2020 Feature.
// The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).
// If you want to search case insensitive, the insensitive flag (i) must be set.
let text1 = "Roses are red, Roses smell good";
const iterator = text1.matchAll('Roses');
console.log(iterator);

const iterator2 = text1.matchAll(/e/g);
console.log(iterator2);

const iterator3 = text1.matchAll(/roses/ig);
console.log(iterator3);


