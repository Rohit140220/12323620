// 2.closure: Inner function can access the variables and arguments of outer function but outer function cannot access the values of inner function.
// closure = A function remember variables from where it was created.
// 2.1:
function outerfunc() {
  let a = 40;
  console.log("This is a outer function");
  console.log("Accessing outer values", a);
  //   console.log(b);
  function innerFunc() {
    let b = 20;
    console.log("This is a inner function");
    console.log("Accessing outer values", a);
    console.log("Accessing inner value: ", b);
  }
  innerFunc();
}
outerfunc();

// 2.2: returning function:
function Add(x) {
  //x is capturing in the closure
  return function (y) {
    return x + y;
  };
}

const add5 = Add(5);
const add10 = Add(10);

console.log("Add5 and 3:", add5(3));
console.log("Add10 and 3:", add10(3));

// 2.3: Data privacy with closure:
// Here count cannot be accessed directly, only through functions it can be accessible. This is called encapsulation(for security purpose)

function createCount() {
  let count = 0; // private variables
  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCount();
console.log("Initial count: ", counter.getCount());
console.log("After Increment: ", counter.increment());
console.log("After Increment: ", counter.increment());
console.log("After decrement: ", counter.decrement());

// 2.4: calculator: module pattern
const calculator = (function () {
  let result = 0; // Private variable
  const select = {
    add: function (x) {
      result += x;
      console.log("Added " + x + "Result is: " + result);
      return select;
    },
    subtract: function (x) {
      result -= x;
      console.log("Subtract " - x + "Result is: " + result);
      return select;
    },
    multiply: function (x) {
      result *= x;
      console.log("Added " * x + "Result is: " + result);
      return select;
    },
    getResult: function () {
      return result;
    },
  };
  return select;
})();
calculator.add(10).subtract(3).multiply(2);
console.log("Final result is:", calculator.getResult());

// 2.5: we are creating a function that creates and returns other functions, each with its own private data:
function creatingMultiple(multi) {
  return function (number) {
    return number * multi;
  };
}
const double = creatingMultiple(2);
const triple = creatingMultiple(3);
console.log("Double of 3 is: ", double(3));
console.log("Triple of 3 is: ", triple(3));

// 1.Nested functions:
// function outerfunc() {
//   console.log("This is a outer function");
//   function innerFunc() {
//     console.log("This is a inner function");
//   }
//   innerFunc();
// }
// outerfunc();
