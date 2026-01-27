let AmanMsg = "    meet me after your class    ";

// string are Immutable( it cannot be changed by index assignment):

// 8.repeat: repeats the strinf for n times:
let message = "hmm ";
console.log(message.repeat(3));

// 7.replace: replaces 1st occurance of substring:
let txt = "i love moon";
console.log(txt);
let newTxt = txt.replace("moon", "Yue");
console.log(newTxt);

// 6 slice: extracts part of the string(start, end-1)
let msg = "Is this a PEP classes";
console.log(msg.slice(-3));
console.log(msg.slice(3));
console.log(msg.slice(3, 9));

// 5.Method chaining: combining multiple methods:
let fruit = "    bnanans";
// let fruitTrim = fruit.trim();
// console.log(fruitTrim);

let fruitAfterChaining = fruit.trim().toUpperCase();
console.log(fruitAfterChaining);

// 4.indexOf: returns index of 1st occurence of substring:
let textMsg = "sonam bewafa hai";
console.log(textMsg.indexOf("bewafa"));

// 3.toLowerCase: convert string to lowerCase:
let lowerCase = "THIS IS A UPPER CASE DATA";
console.log(lowerCase.toLowerCase());

// 2.toUppercase: convert string to uppercase:
let uppercase = AmanMsg.toUpperCase();
console.log(uppercase);

AmanMsg[2] = "x";
console.log(AmanMsg);

// 1.Trim: Removed extra whitespace from both ends:
let newAmanMsg = AmanMsg.trim();
console.log(newAmanMsg);
