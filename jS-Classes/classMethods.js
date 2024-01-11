// Class Methods
// Class methods are created with the same syntax as object methods.

// Syntax
/*
class ClassName {
    constructor() { ... }
    method_1() { ... }
    method_2() { ... }
    method_3() { ... }
}
*/

class Student {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

const student1 = new Student('Ahmed', 2000);
console.log(student1); // Student { name: 'Ahmed', year: 2000 }
console.log(student1.age()); // 24

