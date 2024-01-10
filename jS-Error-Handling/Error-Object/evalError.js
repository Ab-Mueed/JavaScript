// Eval Error
// An EvalError indicates an error in the eval() function
// Newer versions of JavaScript do not throw EvalError. Use SyntaxError instead.


try {
    var code = "console.log('Hello, world!';";
    eval(code); // Missing closing parenthesis causing a syntax error
} catch (err) {
    console.log(err.name);
    console.error("Error:", err.message);
}
// SyntaxError
// Error: missing ) after argument list

