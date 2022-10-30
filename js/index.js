// if tasks
//1
const varUser = parseInt(prompt("enter variable"));
let unswerSeconds;

if (varUser === 10) {
  isVarTen = "Вірно";
} else {
  isVarTen = "Невірно";
}
alert(isVarTen);

//2
const test = Boolean(prompt("enter variable"));
let isTestUnswer;

if (test === true) {
  isTestUnswer = "Вірно";
} else {
  isTestUnswer = "Невірно";
}
alert(isTestUnswer);

if (test !== true) {
  isTestUnswer = "Вірно";
} else {
  isTestUnswer = "Невірно";
}
alert(isTestUnswer);

//3
const amount = parseInt(prompt("enter the purchase amount"));
let amountUnswer;
if (!Number(amount)) {
  amountUnswer = "purchase amount is not a number";
} else {
  if (amount > 800) {
    amountUnswer -= (amountUnswer / 100) * 5;
  } else if (amount > 500) {
    amountUnswer -= (amountUnswer / 100) * 3;
  }
  amountUnswer += "грн";
}
alert(amountUnswer);

// loops tasks
//1
let i = 25;
while (i >= 0) {
  console.log(i--);
}

for (let index = 25; index >= 0; index--) {
  console.log(index);
}

//2
let indexNum = 10;

while (indexNum <= 50) {
  console.log(indexNum);
  indexNum += 5;
}

for (let index = 10; index <= 50; index += 5) {
  console.log(index);
}

//3
let sumNum = 1;
let sumWhileUnswer = 0;

while (sumNum < 101) {
  sumWhileUnswer += sumNum++;
}

console.log(sumWhileUnswer);

let sumForUnswer = 0;

for (let index = 1; index < 101; index++) {
  sumForUnswer += index;
}

console.log(sumForUnswer);
