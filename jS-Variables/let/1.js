// let was added to jS in 2015.
// A variable declared without a value will have the value undefined.
// let does not allow re-declaring variables in same scope.
// Variables declared with let have Block Scope.
// Variables declared with let must be Declared before use.
// Variables declared inside a { } block cannot be accessed from outside the block.
// Variables defined with let are also hoisted to the top of the block, but not initialized.
    // Meaning: Using a let variable before it is declared will result in a 'ReferenceError'.

let x = 5;
let y = 6;
let z = x + y;
console.log(z); // 11


// One statement, Many Variables
let fName = "Abdul", mName = 'Mueed', age = 23;

// Declaration can span multiple lines
let a = 20,
    b = 1,
    c = 'jS';


let v;
console.log(v); // undefined


let r = 9;
// let r; // If you remove the comment from this statement, it will show error bcz re-declaration in same scope is not allowed.



{
    let p = 10;
    console.log("Block Scope p: " + p); // 10
}

let p = 20;
console.log("Outside of Block Scope p: " + p); // 20


m = 'm';
// let m; // Not Allowed. Will be hosited to the top but will not be initialised.