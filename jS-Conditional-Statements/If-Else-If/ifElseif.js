// The Else if Statement
// 'Else if' statement is used to specify a new condition if the first condition is 'false'.
// Syntax

/*
if (condition1) {
    // block of code to be executed if condition1 is 'true'
} else if (condition2) {
    // block of code to be executed if the condition1 is 'false' and condition2 is 'true'
} else {
    // block of code to be executed if the condition1 is 'false' and condition2 is 'false' 
}
*/


for (let time = 8; time < 33; time = time * 2) {
    if (time < 10) {
        greeting = 'Good Morning';
        console.log(greeting); // Good Morning
    } else if (time < 20) {
        greeting = 'Good Day';
        console.log(greeting); // Good Day
    } else {
        greeting = 'Good Evening';
        console.log(greeting); // Good Evening
    }

}
