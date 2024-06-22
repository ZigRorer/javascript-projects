const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let endOfWord = str.slice(0,3); // Lau
let startOfWord = str.slice(3,10);
console.log(endOfWord);
console.log(startOfWord);

let newWord = startOfWord + endOfWord;
console.log(newWord);
// nchCodeLau

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${str} becomes ${newWord} when converted into pseudo-pig latin.`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userInput = input.question("Enter the number of letters that will be relocated: ")
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (userInput != endOfWord.length) {
    console.log(`Incorrect. ${endOfWord.length} letters should have moved.`)
} else {
    console.log(`Correct! The new word is ${newWord}`)
}