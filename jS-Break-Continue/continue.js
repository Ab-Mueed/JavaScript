// The Continue Statement
// The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    console.log(i);
}
// 0 1 2 4 5 6 7 8 9

let j = 0;
while (j < 10) {
    j++;
    if (j === 4) { continue; }
    console.log(j);
}
// 1 2 3 5 6 7 8 9 10