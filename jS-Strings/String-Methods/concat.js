// concat() joins two or more Strings.
//  Non-string values are implicitly converted to strings before concatenation.
let text1 = 'jS';
let text2 = 'Course';
let num = 46;
console.log(text1.concat(" ", text2)); // jS Course
console.log(text1.concat(text2)); // jSCourse
console.log(text1.concat(text1)); // jSjS
console.log(text2.concat("", text1)); // CoursejS
console.log(text2.concat(1, text1)); // Course1jS
console.log(text2.concat("---", text1)); // Course---jS
console.log(text1.concat(" ", text2, " ", num)); // jS Course 46


// The concat() method can be used instead of the plus operator.
let text3 = "Hello" + " " + "World!";
console.log(text3); // Hello World!
let text4 = "Hello".concat(" ", "World!");
console.log(text4); // Hello World!