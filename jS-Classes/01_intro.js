// JavaScript Classes
// ES6 introduced JavaScript Classes
// JavaScript Classes are 'templates' for JavaScript Objects. It itself is not an 'Object'

// Syntax
/*
> Use the keyword 'class' to create a class.
> Always add a method named 'constructor()'.
> The constructor method is called automatically when a new object is created.

class ClassName {
    constructor() { ... }
}
*/

// Example
class Student {
    constructor(fName, age) {
        this.fName = fName;
        this.age = age;
    }
}

// Using a Class
// When you have a class, you can use the class to create objects

const student1 = new Student('Junaid', 20);
console.log(student1); // Student { fName: 'Junaid', age: 20 }
const student2 = new Student('Kamran', 20);
console.log(student2); // Student { fName: 'Kamran', age: 20 }


