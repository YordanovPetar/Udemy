// Functions

// Declarative function - Can be called in the beginning of the file even before the declaration
helloOne();

function helloOne() {
    console.log('Hello one!');
}

// Anonymus function - cannot be called before the decalration
let helloTwo = function () {
    console.log('Hello two!');
}

helloTwo();

// ES6 function syntax or arrow function
let helloThree = () => {
    console.log('Hello Three!');
}

helloThree();

// Function with arguments
function printName(name, lastname) {
    console.log(name + " " + lastname);
}

printName('Mike', 'Smith');

// Function with return
function multipleByTwo(number) {
    let result = number * 2;
    return result;
}

let myResult = multipleByTwo(5);
console.log(myResult);

// import function
import { printAge } from '../helpers/printHelper.js'
printAge(7);

// import everything
import * as helper from '../helpers/printHelper.js'
helper.printAge(9);
