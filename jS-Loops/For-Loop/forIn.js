// The For In Loop
// The JavaScript for in statement loops through the properties of an Object.
// Synatx
/*
for (key in object){
    // code block to be executed
}
> The for in loop iterates over a person object.
> Each iteration returns a key (x).
> The key is used to access the value of the key.
> The value of the key is person[x].
*/


const person = { fName: 'Alpha', lName: 'Male', age: 23 };
for (let x in person) {
    console.log(person[x]);
}
/*
Alpha
Male
23
*/

const fruits = ['Banana', 'Apple', 'Mango'];
for (let x in fruits) {
    console.log(fruits[x]);
}
/*
Banana
Apple
Mango
*/

// Important
/*
> Do not use for in over an Array if the index order is important.
> The index order is implementation-dependent, and array values may not be accessed in the order you expect.
> It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.
*/

