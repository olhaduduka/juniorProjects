// //
// Калькулятор - объект, у которого будут методы (свойства-функции) add, subtract multiply, divide, square.
// var calculator = {
// add: function(a, b) {
// return a + b;
// },
// }
// calculator.add(5, 5) // 10
// + error handling
// calculator.add(5) // "Please give 2 parameters"

// calculator.count([7, 8], '+') - 15
// calculator.count([9, 7], '*') - 63

// calculator.makeSum([1, 4, 77, 98]) - 180
var calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  divide: function(a, b) {
    return a % b;
  },
  square: function(a) {
    return a * a;
  },
  multiply: function(a,b) {
    return a * b;
  },
  makeSum: function(arrayOfNumbers){
    var sum = 0;
    for (var i = 0; i<arrayOfNumbers.length; i++) {
      sum = sum + arrayOfNumbers[i];
    }
    return sum
  },
  makeMultiplication:function(arrayOfNumbers){
    var mul = arrayOfNumbers[0];
    for (var i = 1; i<arrayOfNumbers.length; i++) {
      mul = mul * arrayOfNumbers[i];
    }
    return mul
  },
}
