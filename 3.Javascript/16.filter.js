console.log("Learning about filters");

// filter: they also dont change our original array values

let arr = [1, 23, 47, 65];

let a = arr.filter((val) => {
  return val < 10;
});
console.log(a);

// greater than 20: let b:
let b = arr.filter((val) => {
  return val > 20;
});
console.log(b);

// chaining number btw 20 and 60:
let c = arr.filter((val) => val > 20).filter((val) => val < 60);
console.log(c);

// filter with index and array parameters
let d = arr.filter((num, index, array) => {
  return num > array[0];
});
console.log("Number greater than index 0 is: ", d);
