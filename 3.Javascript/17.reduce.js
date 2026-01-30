// reduce : It executes a reducer callback function on each element of an array, resulting a single output value:

// Syntax:
// Array.reduce(accumulator[result so far],currentValue)=>
// {
//  return updatedAccumalator;
// },intialValue)

// 1.Basics:
let arr = [1, 2, 3, 4, 5, 6];
let newArr = arr.reduce((num1, num2) => {
  return num1 + num2;
}, 0);
console.log(newArr);

// 2. Find the product of arr:
let productOfArr = arr.reduceRight((acc, val) => acc * val, 1);
console.log(productOfArr);

// 3. reducer on objects:
let students = [
  {
    name: "Alice",
    marks: 85,
  },
  {
    name: "Sara",
    marks: 92,
  },
  {
    name: "Amit",
    marks: 78,
  },
];

// 3.1:find the total marks of students:
// let totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
// console.log("Total marks of students are: ", totalMarks);

// 3.2: You have to group students into pass and fail categories by dynamically building an object based on their marks: So basically you have to convert array to object
// ternary operator---> condition ? xyz : yze
let groupByMarks = students.reduce((group, student) => {
  let key = student.marks >= 80 ? "Pass" : "Fail"; //ternary operator
  if (!group[key]) group[key] = []; // were creating a array if after forming group there were no individual array for pass and fail
  group[key].push(student.name);
  return group;
}, {});
console.log("Student with passed and fail:", groupByMarks);
