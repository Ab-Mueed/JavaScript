// The values() Method
// The values() method returns a new iterator object containing all the values in a Set.

const letters = new Set(['a', 'b', 'c']);
console.log(letters.values()); // [Set Iterator] { 'a', 'b', 'c' }

// Using for-of with values() Method

// Example 1
for (const x of letters) {
    console.log(x);
}
/*
a
b
c
*/

// Example 2
for (const x of letters.values()) {
    console.log(x);
}
/*
a
b
c
*/
