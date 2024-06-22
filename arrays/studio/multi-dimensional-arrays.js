let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodSorted = food.split(',').sort();
let equipmentSorted = equipment.split(',').sort();
let petsSorted = pets.split(',').sort();
let sleepAidsSorted = sleepAids.split(',').sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [foodSorted,equipmentSorted,petsSorted,sleepAidsSorted];
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');

let userQuery = input.question("Select Cabinet 0-3: ")
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (userQuery === cargoHold.indexOf(foodSorted)) {
    console.log(foodSorted);
} else if (userQuery === cargoHold.indexOf(equipmentSorted)) {
    console.log(equipmentSorted);
} else if (userQuery === cargoHold.indexOf(petsSorted)) {
    console.log(petsSorted)
} else if (userQuery === cargoHold.indexOf(sleepAidsSorted)) {
    console.log(sleepAidsSorted)
} else {
    console.log('Error: Invalid entry.')
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
