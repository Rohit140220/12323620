// maps(): It creates a new array by transforming element without modifying the original one

let arr = [22, 45, 67];

// let double = arr.map((val) => val * 2);
// console.log("Array with Double value:", double);
// console.log("Original array is: ", arr);
// callbacks: (element, index, array);

// let triple = arr.map((val, index, array) => {
//   console.log(`Index: ${index}, Value: ${val}, Full Array:`, array);
//   return val * 3;
// });

// console.log("Tripled array:", triple);

// Transforming object:
let students = [
  {
    name: "alice",
    marks: 45,
  },
  {
    name: "sara",
    marks: 78,
  },
  {
    name: "john",
    marks: 92,
  },
];

let names = students.map((student) => student.name);
console.log("Name of students is:", names);

// chaining using map() operation:
let result = arr
  .map((num) => num * 2)
  .map((num) => num + 3)
  .map((num) => num - 4);
console.log("Chaining result is:", result);

// converting string to numbers
let stringNumber = ["1", "5", "9"];
let numArray = stringNumber.map(Number);
console.log(numArray);
