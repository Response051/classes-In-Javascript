/**
This is a class Nation with its requsite object
*/

class Nation {
  name = "Nigeria";
  geography = "West Africa"
  population = "200,000,000"

  election() {
    let canditates = ["Obi", "Atiku", "Bla-Bla-Blue"]
    let winner = canditates[2]
    console.log(`the winner of the 2023 election is ${winner} `)
  }

  static losers = "This include Obi, and Atiku"  // do this later
}

const nation = new Nation()
console.log(nation)

// To access any specific properties of the class Nation
let access = nation.name
console.log(access)

// To update the Class Nation
nation.geography = "East- Africa"
let update = nation.geography
console.log(update)

console.log(nation) // This console is meant too check the updated geography.

// To add a property to the class Nation
nation.president = "PMB"
console.log(nation)

// To instantiate a function within the Class Nation
nation.election()

// To access the static class
console.log(Nation.losers)



module.exports = { Nation }