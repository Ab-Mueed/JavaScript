let text1 = "     Harwork is the key to Success      ";
console.log(text1.length); // 40

// 1)
// The trim() method removes whitespace from both sides of a string.
console.log(text1.trim().length); // 29
console.log(text1.trim('!').length); // 29
console.log(text1.trim(35).length); // 29


// 2)
// trimStart() method added to jS in 2019.
// The trimStart() method works like trim(), but removes whitespace only from the start of a string.
console.log(text1.trimStart().length); // 35


// 3)
// trimEnd() method added to jS in 2019.
// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
console.log(text1.trimEnd().length); // 34