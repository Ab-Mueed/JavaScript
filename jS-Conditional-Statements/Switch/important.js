// Switching Details
/*
> If multiple cases matches a case value, the first case is selected.
> If no matching cases are found, the program continues to the default label.
> If no default label is found, the program continues to the statement(s) after the switch.
*/

// Example
let x = 1;
switch (x) {
    case 1:
        console.log('First Case');
        break;
    case 1:
        console.log('Duplicate of First Case');
        break;
    case 2:
        console.log('Second Case');
        break;
    default:
        console.log('Default');
}
// It will print First Case.



// Strict Comparison
/*
> Switch cases use strict comparison (===).
> The values must be of the same type to match.
> A strict comparison can only be true if the operands are of the same type.
*/

let y = '1';
switch (y) {
    case 1:
        console.log('1');
        break;
    case 2:
        console.log('2');
        break;
    case 3:
        console.log('3');
        break;
    default:
        console.log('Default');
}
// It will print Deafult