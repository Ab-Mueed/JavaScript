// The Constructor Method
// The constructor method is a special method.
// It has to have the exact name "constructor".
// It is executed automatically when a new object is created.
// It is used to initialize object properties.
// If you do not define a constructor method, JavaScript will add an empty constructor method.

// Example 1
class Student {
    // Since constructor() Method is not declared explicitly, hence jS will add an empty constructor method.
}
const student1 = new Student();
console.log(student1); // Student {}


// Example 2
class Employee {
    constructor() {
        console.log('Constructor of Employee Class');
    }
}
const employee1 = new Employee(); // Constructor of Employee Class

