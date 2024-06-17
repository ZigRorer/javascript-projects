const input = require('readline-sync');

let firstName = input.question("Enter your first name: ");
let lastName = input.question("Enter your last name: ")

console.log("Hello, " + firstName + " " + lastName + "!");
