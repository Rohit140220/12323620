// 4. Do while loop:
// Write a program where were checking user login attempts
// everytime user false to login we say retry untill the enter password is correct:
// So, we atleast execute body once,then we check for the condition:
let attempt = 1;
do {
  console.log("Attempt: " + attempt);

  attempt++;
} while (attempt <= 3);
console.log("Attempts failed please check the details");

// // 3.While loop:
// // write a program where you have to print the countdown from 5 to 0. But 1st u have to check the condition then execute the body. Repeat it until while condition is true
// let i = 5;
// while (i > 0) {
//   console.log("Countdown remians: " + i);
//   i--;
// }

// // 2. Nested for loop:
// // where we are creating multiple table grid:
// // outer loop run for 3 times, inner loop should run 3 times for each iteration
// // total iteration 3 x 3= 9 times
// for (let i = 1; i <= 3; i++) {
//   console.log("Table of " + i);
//   for (let j = 1; j <= 3; j++) {
//     console.log(i + "x" + j + " = " + i * j);
//   }
// }

// // 1.for loops: print odd number btw 50 to 80
// // starting point is 51, increment by 2 each iteration, stop at 80

// for (let i = 51; i <= 80; i = i + 2) {
//   console.log("Odd Numbers btw 50 to 80 are: ", +i);
// }
