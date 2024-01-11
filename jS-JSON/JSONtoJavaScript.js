// Converting a JSON Text to a JavaScript Object
// A common use of JSON is to read data from a web server, and display the data in a web page.

// 1) First, create a JavaScript string containing JSON syntax:
let text = '{"employees":[' +
    '{ "firstName": "John", "lastName": "Doe" },' +
    '{ "firstName": "Anna", "lastName": "Smith" },' +
    '{ "firstName": "Peter", "lastName": "Jones" } ]}';



// 2) Then, use the JavaScript built-in function 'JSON.parse()' to convert the string into a JavaScript object.
const obj = JSON.parse(text);



// 3) Finally, use the new JavaScript object in your page
console.log(obj.employees[1].firstName + " " + obj.employees[1].lastName); // Anna Smith