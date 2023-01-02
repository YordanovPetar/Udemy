// if else

// Hour
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

console.log("if else");

let hour = 20;

if (hour >= 6 && hour < 12) console.log("Good morning!");
else if (hour >= 12 && hour < 18) console.log("Good afternoon!");
else console.log("Good evening!");

// switch case

console.log("switch case");

let role = "guest";

switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  default:
    console.log("Unknown Role");
}

if (role === "guest") console.log("Guest");
else if (role === "moderator") console.log("Moderator");
else console.log("Unknown User");

// For
console.log("For");

for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i);
}

for (let i = 5; i >= 1; i--) {
  if (i % 2 !== 0) console.log(i);
}

// While
console.log("while");

let count = 1;

while (count <= 5) {
  if (count % 2 !== 0) console.log(count);
  count++;
}

// do-while
// executed at least once
console.log("do while");

let i = 9;

do {
  if (i % 2 !== 0) console.log(i);
  i++;
} while (i <= 5);

// Infinite loop
/* let num = 0;

while (num < 5) {
  console.log(num);
  num++;
} */

/* while (true) {

} */

/* do {

} while (true) */

/* for (let i = 0; i > 0; i++) {

} */

// for
// while
// do-while

// for-in - iterate over thew properties of an object
console.log("for-in");

const person = {
  name: "John",
  age: 30,
};

// Dot Notation
// person.name

// Bracket Notation
// person['name']

for (let key in person) {
  console.log(key, person[key]);
}

const colors = ["red", "green", "blue"];

for (let index in colors) {
  console.log(index, colors[index]);
}

// for-of - iterate over the elements/items in an array
console.log("for-of");

for (let color of colors) {
  console.log(color);
}

// Break and Continue
console.log("Break and Continue");

let l = 0;

while (l <= 10) {
  // if (l === 5) break;

  if (l % 2 === 0) {
    l++;
    continue;
  }

  console.log(l);
  l++;
}
