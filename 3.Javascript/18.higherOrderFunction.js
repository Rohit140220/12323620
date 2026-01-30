// 1: callback function: a function that is passed as an argument to another function and is called later.

function myfun(name) {
  console.log("Hello " + name);
}
// myfun("shiva")

function call(f) {
  f("shiva"); // calling the callback
}
call(myfun); //myfun is a callback

// 2 HOF: It is a function which take another function as an argument or return another function as a function

// callback function
function hello() {
  console.log("Hello from callback function");
}

// 2.higher order function:
function myfunc(callback) {
  callback(); // calling a function passed a argument
}
// passing a function as an argument
myfunc(hello);

// 3. how to create function dynamically:
function greet(message) {
  return function (name) {
    console.log(message + " " + name);
  };
}

const greetHello = greet("Hello");
greetHello("Shiva");

const greetWelcome = greet("welcome");
greetWelcome("P123 ");

// 4caculate area of circle:
// 4.1
const radius = [1, 2, 3, 4, 5];

// function calculateArea(radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// }
// console.log(`Area of circle is ${calculateArea(radius)}`);

// 4.2: HOF:
const area = (r) => Math.PI * r * r;
const diameter = (r) => 2 * r;
const circumference = (r) => 2 * Math.PI * r;

// creating a HOF:
function calculate(arr, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(arr[i])); // calling callback
  }
  return output;
}
console.log("Area of circle is: ", calculate(radius, area));
console.log("Diameter of circle is: ", calculate(radius, diameter));
console.log("Circumference of circle is: ", calculate(radius, circumference));

// 5.using built in method: map():

const area2 = (r) => Math.PI * r * r;
const result = radius.map(area2);
console.log(result);


