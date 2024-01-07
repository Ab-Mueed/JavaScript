// The For Of Loop
// Added to jS in 2015 (ES6)
// The JavaScript 'for of' statement loops through the values of an iterable object.
// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more.

const cars = ['BMW', 'Audi', 'Mercedes'];
let container = "";
for (let x of cars) {
    container += x;
    console.log(container);
}
/*
BMW
BMWAudi
BMWAudiMercedes
*/

let course = 'JavaScript';
let text = '';
for (let x of course) {
    text += x;
    console.log(text);
}
/*
J
Ja
Jav
Java
JavaS
JavaSc
JavaScr
JavaScri
JavaScrip
JavaScript
*/