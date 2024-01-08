// JavaScript Labels
// To label JavaScript statements you precede the statements with a label name and a colon.
// Syntax
/*
label:
statements
*/

// The break and the continue statements are the only JavaScript statements that can "jump out of" a code block.
// Syntax
/*
break labelname;
continue labelname;
*/

// The 'continue statement' (with or without a label reference) can only be used to skip one loop iteration.
// The 'break statement', without a label reference, can only be used to jump out of a loop or a switch.
// With a label reference, the break statement can be used to jump out of any code block.

const fruits = ['Apple', 'Banana', 'Mango', 'Grapes', 'Gauva'];
list: {
    console.log(fruits[0]);
    console.log(fruits[1]);
    break list;
    console.log(fruits[2]);
    console.log(fruits[3]);
}
/*
Apple
Banana
*/