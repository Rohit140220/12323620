// 3.forOf: used for iterate over to the iterables objects of arrays, strings, map, set etc.
const students = ["shiva", "Kanav", "sachin", "ram"];

for (let names of students) {
  console.log(names);
}

// 2.forIn: It used for iteration over the iterables of an object one by one. It doesn't guaranty order, Not ideal for array:

for (let index in students) {
  console.log(index, students[index]);
}

// 1.forEach: calls a function once for each element in an array:

students.forEach((stud) => {
  console.log(stud);
});
