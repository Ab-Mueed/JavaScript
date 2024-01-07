// The jS Switch Statement
// The 'switch' statement is used to select one of many code blocks to be executed.

// Syntax
/*
switch(expression){
    case x:
        // code block
        break;
    case y:
        // code block
        break;
    default:
        // code block
}
*/

// Working
/*
1) The switch expression is evaluated once.
2) The value of the expression is compared with the values of each case.
3) If there is a match, the associated block of code is executed.
4) If there is no match, the default code block is executed.
*/

let choice = 1;

switch (choice) {
    case 1:
        option = 'CSE';
        console.log(option);
        break;
    case 2:
        option = 'ECE';
        console.log(option);
        break;
    case 3:
        option = 'Civil';
        console.log(option);
        break;
    case 4:
        option = 'Mechanical';
        console.log(option);
        break;
    case 5:
        option = 'Electrical';
        console.log(option);
        break;
    default:
        option = 'Wrong Option';
        console.log(option);

}

// The Break Keyword
/* 
> When JavaScript reaches a break keyword, it breaks out of the switch block.
> This will stop the execution inside the switch block.
> It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.
> If break statement is removed from any case , it will print, the case which satisfies the condition plus 
the cases beneath it ( even if the evaluation does not match the case) until and unless it finds 'break' statement. 
> Hence 'break' statement is necessary. 
*/

// The Default Keyword
/* 
> The 'default' keyword specifies the code to run if there is no case match.
> The 'default' case does not have to be the last case in a switch block.
> If default is not the last case in the switch block, remember to end the default case with a break.
*/

let x = 3;
switch (x) {
    default:
        result = 'Error';
        console.log(result);
        break;
    case 1:
        result = 'Correct';
        console.log(result);
        break;
    case 2:
        result = 'Near Miss';
        console.log(result);
}