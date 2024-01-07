// Loop Scope
// 'var' in a Loop
// Using var, the variable declared in the loop redeclares the variable outside the loop.

var i = 5;

for (var i = 0; i < 10; i++) {
    // some code
}

// Here i is 10


// 'let' in a Loop
// Using let, the variable declared in the loop does not redeclare the variable outside the loop.
// When 'let' is used to declare the i variable in a loop, the i variable will only be visible within the loop.

let i = 5;
for (let i = 0; i < 10; i++) {
    // some code
}

// Here i is 5
