// selectors: They are used to FETCH, html elements so that we can READ/ UPDATE/STYLE them

// 1. getElementById:
var a = document.getElementById("heading");
console.log(a); //show html element
console.dir(a); // show element as Js Object

// IMP POINTS:
// It returns single element, fastest selector, it must be unique

// Adding style using DOM:
a.style.color = "pink";
a.style.backgroundColor = "aqua";
a.style.border = "2px solid black";
a.style.padding = "20px";

// 2.getElementByClass:
var b = document.getElementsByClassName("items");
console.log(b); //HTMLCollection

// IMP POINT FOR HTMLCOLLECTIONS:
// 1. it look like an array but it is not
// 2.map,reduce,etc etc.... not applicable. But, we can use for..of

for (let list of b) {
  list.style.color = "blue";
  list.style.fontWeight = "bold";
}

// 3.getElementByTagName:
var c = document.getElementsByTagName("h3");
c[0].style.color = "brown";
c[0].style.textDecoration = "line-through";
c[0].style.backgroundColor = "yellow";

// IMP POINT:
// Returns htmlcollector, it must be accessed using index

// 4. querySelector:

// var d = document.querySelector("#work");
// var d = document.querySelector(".routine");
// var d = document.querySelector("ul li a");
var d = document.querySelector("li:nth-of-type(3)");
d.style.color = "red";

// IMP POINT:
// Select first match only

// 5. querySelectorAll:
var e = document.querySelectorAll("ul li");
console.log(e);
e[2].style.backgroundColor = "pink";

// IMP POINT:
// It is not an array. we can use forEach here, and we're getting nodeList here
