// variables tasks
// 1
const a = 5;
const b = 5;

console.log("a * b", a * b);

// 2
const c = 5;
const d = 5;

console.log("c / d", c / d);

// 3
const e = 5;
const f = 5;

console.log("e + f", e + f);

// 4
const intVar = 11;
const booleanVar = true;
const stringVar = "java script";
const intInStringVar = "100";

console.log(intVar, booleanVar, stringVar, intInStringVar);

// 5
let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
++num;
--num;

// prompt tasks
//1
const numUser = parseInt(prompt("enter number"));
let unswerNumUser;

if (numUser) {
  unswerNumUser = numUser ** 2;
} else {
  unswerNumUser = "entered not number";
}

alert("Result: " + unswerNumUser);

//2
const firstNumUser = parseInt(prompt("enter first number"));
const secondNumUser = parseInt(prompt("enter second number"));
let unswerFewNumUser;

if (!firstNumUser || !secondNumUser) {
  unswerFewNumUser = "entered not number";
} else {
  unswerFewNumUser = (firstNumUser + secondNumUser) / 2;
}

alert("Result: " + unswerFewNumUser);

//3
const minUser = parseInt(prompt("enter minuts"));
let unswerSeconds;
if (minUser) {
  unswerSeconds = minUser * 60;
} else {
  unswerSeconds = "entered not number";
}

alert("Result: " + unswerSeconds);

//4
const greeting = "Hello, ";
let userName = prompt("enter user name");

alert(greeting + unswerSeconds + "!");
