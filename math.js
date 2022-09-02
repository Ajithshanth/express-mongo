const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const sumOf = (numbers) => {
  var total = 0;
  for (let i = 0; i < numbers.length; i++) { 
    total += numbers[i];
  }
  return total;
};
module.exports = { add, subtract, multiply, divide, sumOf };
