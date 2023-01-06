/** Write the code, one line for each action:
1. Create an empty object user.
2. Add the property name with the value John.
3. Add the property surname with the value Smith.
4. Change the value of the name to Pete.
5. Remove the property name from the object.
*/

// 1. Create an empty object user.
const user = {};
// 2. Add the property name with the value John.
user.name = "John"
console.log(user);
// 3. Add the property surname with the value Smith.
user.surname = "Smith"
console.log(user);
// 4. Change the value of the name to Pete.
user.name = "peter"
console.log(user);
// 5. Remove the property name from the object.
delete user.name
console.log(user);



module.exports = { console }