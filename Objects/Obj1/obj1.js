
/***
create an object named student with keys-name, rollNo and total marks. Also create two functions.
1. first functions to print the information about the student
2. second function to check if the student passed the exam or not.
if the mark is less than 4o,print "you failed",if the total mark is greater than or equal to 40, print "You passed"

*/

function Student() {
  this.name = "Jane",
    this.rollNo = 55401,
    this.totalMark = prompt("enter value, ")
};
const student = new Student()
// console.log(student.totalMark);
//  console.log(student.name) 
//  1. function to print the infomation of the student.
function info() {
  return student;
}
console.log(info())

// 2. second function to check if the student passed the exam or not.
// if the mark is less than 40,print "you failed",if the total mark is greater than or equal to 40, print "You passed"
let resultED = student.totalMark
function result(resultED) {
  let output = (resultED >= 40) ? "You Passed" : "You failed";
  console.log(output);
};
console.log(result(resultED))

module.exports = { console }