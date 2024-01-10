// The Error Object
// JavaScript has a built in error object that provides error information when an error occurs.
// The error object provides two useful properties: name and message

// Error Object Properties:
/*
-Property-                        -Description-

name                              Sets or returns an error name
message                           Sets or returns an error message (a string)
*/

// Error Name Values:
/*
Six different values can be returned by the error name property:

-Error Name-                      -Description-

EvalError                         An error has occurred in the eval() function
RangeError                        A number "out of range" has occurred
ReferenceError                    An illegal reference has occurred
SyntaxError                       A syntax error has occurred
TypeError                         A type error has occurred
URIError                          An error in encodeURI() has occurred
*/

// Non-Standard Error Object Properties
/*
--->Mozilla and Microsoft define some non-standard error object properties:

> fileName (Mozilla)
> lineNumber (Mozilla)
> columnNumber (Mozilla)
> stack (Mozilla)
> description (Microsoft)
> number (Microsoft)

!!! Do not use these properties in public web sites. They will not work in all browsers.
*/
