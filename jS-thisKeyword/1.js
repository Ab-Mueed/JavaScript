// In jS, the 'this' keyword refers to an object.
// The this keyword refers to different objects depending on how it is used:
/*
1) In an 'object method', 'this' refers to the 'object'.
2) 'Alone', 'this' refers to the 'global object'.
3) In a 'function', 'this' refers to the 'global object'.
4) In a 'function', in 'strict mode', 'this' is 'undefined'.
5) In an 'event', 'this' refers to the 'element' that 'received' the 'event'.
6) Methods like 'call()', 'apply()', and 'bind()' can refer 'this' to 'any' object.
*/
const person = {
    firstName: "Alpha",
    lastName: "Male",
    id: 5050,
    fullName: function () {
        return this.firstName + " " + this.lastName;
        // Here, 'this' refers to the 'person object'.
        // 'this.firstName' means the 'firstName' property of 'person'.
        // 'this.lastName' means the 'lastName' property of 'person'.

    }
};
console.log(person.fullName());
