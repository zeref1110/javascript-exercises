/*
 First name: Carlos
 Last name: Stevenson
 This year: 1965
 Birth year: 1947

 The greeting should read: "Hello! My name is Carlos Stevenson and I am 18 years old."
*/

// Add your code right below, good luck!
const firstName = "Jazzer"
const lastName = "Ancheta"
const currentYear = 2024
const birthYear = 2001
const fullName = firstName + " " + lastName
const age = currentYear - birthYear

const greeting = "Hello! My name is " + firstName + " " + lastName + " and I am " + (currentYear - birthYear) + " years old."




// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  currentYear: typeof currentYear === 'undefined' ? undefined : currentYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}
