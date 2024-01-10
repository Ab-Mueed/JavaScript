// This with Arrow Function
// The handling of 'this' is different in arrow functions compared to regular functions.
// In short, with arrow functions there are no binding of this.
// In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.
// With arrow functions the this keyword always represents the object that defined the arrow function.


// 1)
// this with Regular Function
function regularFunction() {
    console.log(this);
}

// Creating an object
let obj1 = {
    property1: 'I am an object',
    method1: regularFunction
};

// Calling the regular function as a method of the object
obj1.method1();
// Output: { property: 'I am an object', method: [Function: regularFunction] }
/*
In the example above, when regularFunction is called as a method of the obj object, this inside the 
function refers to the object ({ property: 'I am an object', method: [Function: regularFunction]}).
*/



// 2) 
// this with Arrow Function
let arrowFunction = () => {
    console.log(this);
};


// Creating an object
let obj2 = {
    property2: 'I am an object',
    method2: arrowFunction
};
// Calling the arrow function as a method of the object
obj2.method2(); // {}
// Output: The value of 'this' is not determined by the method call, but by where the arrow function is defined. It may be the global object or undefined.
/*
In this example, when arrowFunction is called as a method of the obj object, this inside the function 
is not determined by the method call but is instead determined by where the arrow function is defined. 
It may refer to the global object or be undefined depending on the context in which the arrow function 
is declared.
*/