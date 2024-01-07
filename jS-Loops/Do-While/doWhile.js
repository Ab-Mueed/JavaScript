// The Do While Loop
// The do while loop is a variant of the while loop.
// This loop will execute the code block once, before checking if the condition is 'true'. Then it will repeat the loop as long as the condition is 'true'.

// Syntax
/*
do{
    // code block to be executed.
    variable++
}while (condition);

Do not forget to increase the variable used in the condition, otherwise the loop will never end.
*/

// Example 1
let i = 0;
do {
    console.log(i);
    i++
} while (i < 10);
// 0 1 2 3 4 5 6 7 8 9


// Example 2
let j = 11;
do {
    console.log(j);
    j++
} while (j < 10);
// 11

