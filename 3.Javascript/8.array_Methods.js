let student = ["Shiva", "1160361", "83%", "Lovely Professional University"];
// console.log(student);

let car = ["audi", "bmw", "maruti", "nano"];

// sort: sorts an array:it doesnt sort numbers or letters in ascending order. it sort as per that character or letter associated string value
let letters = ["a", "d", "i", "c", "b"];
console.log(letters.sort());
let num = [1, 10, 16, 21, 2, 20];
console.log(num.sort());

// 10.splice: it is used to replace/ removing and adding a new element in an array
let fruit = ["apple", "bananas", "guava", "pineapple"];

console.log(fruit.splice(0, 1, "grapes", "lemon", "kin"));
console.log(fruit);

console.log(fruit.splice(0, 1));
console.log(fruit.splice(3)); // it removes from index 3 to the end of the array

// 9.slice: copies a portion of an array:
let letter = ["a", "b", "c", "d", "e", "f"];
console.log(letter.slice(-2));
console.log(letter.slice(2, 5));
console.log(letter.slice(2));
console.log(letter.slice());

// 8.reverse: reverse an array:
let rev = [1, 2, 3, 4, 5];
console.log(rev.reverse());

// 7.concat: merges 2 arrays:
let ar1 = ["apple", "bananas"];
let ar2 = ["grapes", "guava"];
console.log(ar2.concat(ar1));

// 6.includes: tells wheather the value is present in array or not: it rturns in true and false:
console.log(car.includes("xuv"));
console.log(car.includes("nano"));

// 5.indexof: returns the index of something:
console.log(car.indexOf("maruti"));
console.log(car.indexOf("nano"));

// 4.shift: remove from start:
car.shift();
console.log(car);

// 3.unshift: add at start:
car.unshift("mercedies");
console.log(car);

// 2.POP: remove in last place of array:
car.pop();
console.log(car);

// 1.PUSH: adds in last place of array:
car.push("volvo");
console.log(car);

// #### Array Methods ######

// 6. Accessing array item particular element from the student:
console.log(student[0][2]);

// 5. Array type is object:
console.log(typeof student);

// 4. if u want to check present value in an array:
console.log(student[8]); // undefined result will come

// 3. Accessing the length of array:
console.log(student.length);

// 2. Accessing values using index in array:
console.log(student[3]);

// 1.Arrays are mutable:
student[1] = 11603456;
console.log(student);
