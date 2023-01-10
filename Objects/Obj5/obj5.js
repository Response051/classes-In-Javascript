
/***
Create an object calculator with three method.

1. read() prompts for two values and saves them as object properties with names a and b respectively.
2. sum() returns the sum of saved values.
3. mul() multiplies saved values and returns the result
*/

function Calculator() {
  this.read = function read() {
    this.a = +prompt("Enter value, ");
    this.b = +prompt("Enter value, ");
  },
    this.sum = function sum() {
      return this.a + this.b
    },
    this.mult = function mult() {
      return this.a * this.b
    }
}
let calculator = new Calculator();

console.log(calculator.read());
console.log(calculator.sum());
console.log(calculator.mult())

// OR


// let calculator = {
//   read() {
//     this.a = +prompt("Enter value, ");
//     this.b = +prompt("Enter value, ");
//   },
//   sum() {
//     return this.a + this.b;
//   },
// mult() {
//     return this.a * this.b;
//   }
// };
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mult())

module.exports = { console }