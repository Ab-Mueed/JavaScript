// Objects are variables too. But objects can contain many values.
// An object has properties and methods.
// The values are written as name:value pairs.
// The name:values pairs in jS objects are called 'properties'.
// jS objects are containers for named values called properties.
const details = { fname: 'Alpha', age: 22, gender: 'Male' };
console.log(details);
// Common practice to declare objects with 'const' keyword.

// Spaces and line breaks are not important. An object definition can span multiple lines.
const person = {
    fname: 'Alpha', // propertyName: Property Value
    lname: 'Beta',
    age: 22,
    gender: 'Male'
};
console.log(person);

// Accessing Object Properties:
// 1) objectName.propertyName
console.log(person.fname);
// 'OR'
// 2) objectName['propertyName']
console.log(person['fname']);

// jS Objects can also have methods.
// Methods are actions that can be performed on objects.
// A method is a function stored as a property.
// Methods are stored in 'properties' as 'function definitions'.

const car = {
    brand: 'BMW',
    model: 'MS210',
    color: 'Snow White',
    carName: function () {
        console.log(this.brand + " " + this.model);
    }
}
// Accessing object Methods:
// objectName.methodName()
console.log(car.carName());

// Accessing method object without () will return the function definition.
console.log(car.carName);




