// Syntax Error
// A SyntaxError is thrown if you try to evaluate code with a syntax error.

try {
    eval("alert('Hello)"); // Missing ' will produce an error
} catch (err) {
    console.log(err.name);
    console.log(err.message);
}
// SyntaxError
// Invalid or unexpected token