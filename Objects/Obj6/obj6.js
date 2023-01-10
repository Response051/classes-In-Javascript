/***
Is it possible to create functions A and B so that new A() == new B()?
if yes, render the function

*/
let object = {};
function A(name) {
  this.name = name;
  return object;
}
function B(name) {
  this.name = name;
  return object;
}

let a = new A()
let b = new B()

if (a == b) {
  alert(true)
}

module.exports = { console }