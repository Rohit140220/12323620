// 2 ways to decalare objects:

// B/ Literals:

let users = {
  user1: {
    name: "abc",
    age: 26,
    user2: {
      name: "Yash",
      age: 25,
    },
  },
};

// 5. merge object:
let obj1 = { name: "yash", age: 24 };
let obj2 = { name: "shiva", age: 25 };

// let obj3 = Object.assign(obj1, obj2);
// console.log(obj3);
// // let obj4 = { ...obj1, ...obj2 };
// // console.log(obj4);

// 4.object inside an array:
let arr = [
  {
    name: "shiva",
  },
  {
    name: "yash",
    "roll number": 12324,
  },
  {
    name: "kanav",
    "roll number": 2343,
  },
];
console.log(arr[2].name);

// 3.object inside object:
let data = {
  user1: {
    name: "sandhaya",
    age: 24,
  },
  user2: {
    name: "Ridhi",
    age: 23,
  },
};
console.log(data["user2"].age);

// 2. changing object value:
users.name = "Devdutt";
// users.user1.user2.name = "Devdutt";
console.log(users);

// console.log(users["roll number"]);
console.log(users["user1"]);
console.log(users.user1.user2.name);
console.log(users.user1.age);
console.log(users);

// A. Constructor way:
const obj = new Object();
obj.name = "Yash";
console.log(obj);
console.log(typeof obj);
