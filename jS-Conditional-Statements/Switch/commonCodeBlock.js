// Common Code Block
// It refers to different 'cases' inside switch using the same code.

let x = 1;
switch (x) {
    case 1:
    case 2:
        // Case 1 and Case 2 use Same Code Block
        result = 'Case 1 & 2';
        console.log(result);
        break;
    case 3:
    case 4:
        // Case 3 and Case 4 use Same Code Block
        result = 'Case 3 & 4';
        console.log(result);
        break;
    default:
        result = 'Default';
        console.log(result);

}