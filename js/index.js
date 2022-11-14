function counter() {
  function getNum(comment) {
    let num = Number(prompt(`Enter ${comment} number`));
    while (isNaN(num)) {
      num = Number(
        prompt(`Sent message is not number!\nEnter ${comment} number`)
      );
    }
    return num;
  }

  let i = getNum('start');
  const increase = getNum('increase');

  return function () {
    debugger;
    return (i += increase);
  };
}

const counter1 = counter();
console.log('counter1() :>> ', counter1());
console.log('counter1() :>> ', counter1());
console.log('counter1() :>> ', counter1());
console.log('counter1() :>> ', counter1());

const counter2 = counter();
console.log('counter2() :>> ', counter2());
console.log('counter2() :>> ', counter2());

console.log('counter1() :>> ', counter1());
