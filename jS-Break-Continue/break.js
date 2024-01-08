// The Break Statement
// The break statement "jumps out" of a loop.

// Example 1
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    // The break statement ends the loop ("breaks" the loop) when the loop counter (i) is 3.
    console.log(i);
}
// 0 1 2


// Example 2
let i = 0;
while (i < 10) {
    if (i === 4) { break; }
    console.log(i);
    i++;
}
// 0 1 2 3