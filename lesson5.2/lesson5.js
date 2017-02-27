function fizzBuzz(arrayOfNumbers) {
  for (var i = 0; i<arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] % 2 === 0 && arrayOfNumbers[i] % 3 === 0) {
      console.log(arrayOfNumbers[i] + " - FizzBuzz");
    }
    else if (arrayOfNumbers[i] % 3 === 0) {
      console.log(arrayOfNumbers[i] + " - Fizz");
    }
    else if (arrayOfNumbers[i] % 2 === 0) {
      console.log(arrayOfNumbers[i] + " - Buzz");
    }
    else {
      console.log(arrayOfNumbers[i] + " - nope");
    }
  }
}
// [7, 8, 4, 1]
// 7 - nope
// 8 - fizz
// 4232 - fizz
// 1 - nope
var Alex = {
  name: "Alex",
  age: 19,
  sayHi: function (name) {
    return a - b;
  },
  sayBuy: function () {
    console.log("Buy buy!");
  },
  honey: function () {
    console.log("I love you, Olya!");
  },
}
