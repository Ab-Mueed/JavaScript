// JavaScript Arrow Function
// Arrow functions were introduced in ES6.
// Arrow functions allow us to write shorter function syntax.

// ----efore Arrow----
fxn1 = function () {
    return 'Fxn1 without Arrow';
}
console.log(fxn1()); // Fxn1 without Arrow



// ----With Arrow Function----
fxn1 = () => 'Fxn1 with Arrow';
console.log(fxn1()); // Fxn1 with Arrow
// It gets shorter! If the function has 'only one statement', and the statement returns a value, you can remove the brackets and the return keyword.
// Arrow Functions Return Value by Default (This works only if the function has only one statement).



fnx2 = () => console.log('Fxn2(Arrow Fxn)');
fnx2(); // Fxn2(Arrow Fxn)



fxn3 = () =>{
    let fName = 'JavaScript';
    console.log(fName);
}
fxn3(); // JavaScript



fxn4 = (num1,num2) => num1+num2;
console.log(fxn4(99,1)); // 100
