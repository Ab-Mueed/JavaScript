// The add() Method
const letters = new Set(['a', 'b', 'c']);
console.log(letters); // Set(3) { 'a', 'b', 'c' }

letters.add('d');
console.log(letters); // Set(4) { 'a', 'b', 'c', 'd' }

// If you add equal elements, only the first will be saved.
letters.add('d'); 
console.log(letters); // Set(4) { 'a', 'b', 'c', 'd' }
console.log(letters.size); // 4

