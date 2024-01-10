// URIError (Uniform Resource Identifier)
// A URIError is thrown if you use illegal characters in a URI function.

try {
    decodeURI("%%%");   // You cannot URI decode percent signs
}
catch (err) {
    console.log(err.name);
    console.log(err.message);
}
// URIError
// URI malformed 
