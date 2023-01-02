// This is my first JavaScript code!
console.log("Basics");

// Variables cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot conatin a space or hyphen (-)
// Are case-sensitive

let name = "Petar";
console.log(name);

let firstName = "Petar";
let lastName = "Yordanov";

// Constant
const interestRate = 0.3;
// Cannot reassign constant
//interestRate = 1;
console.log(interestRate);

// Primitive Tyes - String, Number, Boolean, undefined, null
let personName = "Petar"; // String Literal
let age = 30; // Number Literal
let isApproved = true; // Boolean Literal
let undefinedVariable = undefined;
let nullVariable = null;
let selectedColor = null;

// Reference Types - Objects, Arrays, Functions

// Objects
// Object Literal
let person = {
  name: "Petar",
  age: 35,
};

// Dot Notation - better
person.name = "John";

// Bracket Notation
let selection = "name";
person["name"] = "Mary";
person[selection] = "Mary";

console.log(person);
console.log(person.name);

// Arrays
let selectedColors = ["red", "blue"];
selectedColors[2] = 1;
console.log(selectedColors);
console.log(selectedColors[1]);
console.log(selectedColors.length);

// Functions - set of statemests that performs a task
function greet() {
  console.log("Hello Function Message");
}

greet();

// Performing a task
function greetPerson(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

greetPerson("John", "Dow");
greetPerson("Mary");

// Calculating a value
function square(number) {
  return number * number;
}

let squareNumber = square(2);
console.log(squareNumber);

console.log("Basics");
