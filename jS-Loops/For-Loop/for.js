// For Loop
// oops through a block of code a number of times.
// The for statement creates a loop with 3 optional expressions:
/*
for (expression 1; expression 2; expression 3){
    // code block to be executed
}

> Expression 1 is executed (one time) before the execution of the code block.
> Expression 2 defines the condition for executing the code block.
> Expression 3 is executed (every time) after the code block has been executed.
*/

for (let i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
}


// Expression 1
/*
> Normally expression 1 is used to initialize the variable used in the loop.
> This may not always be the case. jS dosen't care. Expression 1 is 'optional'.
> Many Variables can be initalized in expression 1 (separated by comma).
*/

// Example 1
// Initializing many values in expression 1:
cars = ['BMW', 'Audi', 'Mercedes'];
for (let i = 0, len = cars.length; i < len; i++) {
    console.log(cars[i]);
}

// Example 2
// Omit expression 1:
let j = 0;
let len = cars.length;
for (; j < len; j++) {
    console.log(cars[j]);
}


// Expression 2
/*
> Often expression 2 is used to evaluate the condition of the initial variable.
> This is not always the case. JavaScript doesn't care. Expression 2 is also optional.
> If expression 2 returns true, the loop will start over again. If it returns false, the loop will end.
> If you omit expression 2, you must provide a break inside the loop. Otherwise the loop will never end. This will crash your browser.
*/

// Example
// Using Break statement
for (let num1 = 0; ; num1++) {
    console.log(num1);
    if (num1 > 3) {
        break; // If you remove this, the loop will run infinitely crashing the system.
    }
}


// Expression 3
/*
> Often expression 3 increments the value of the initial variable.
> This is not always the case. JavaScript doesn't care. Expression 3 is optional.
> Expression 3 can do anything like negative increment (i--), positive increment (i = i + 15), or anything else.
> If you omit expression 3 (the "increment" expression), the loop will still increment, but you will need to handle the incrementation within the loop body.
*/
let k = 0;
for (; k < len;) {
    console.log(cars[k]);
    k++; // Manually incrementing 'i'
}