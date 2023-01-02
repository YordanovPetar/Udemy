// Object-oriented Programming (OOP)
// if a function is a part of an object, we are calling it a method

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};


// Factory Function - returns new object
// Camel Notation: oneTwoThreeFour
function createCircle(radius, location) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);
console.log(circle1)

const circle2 = createCircle(2);
console.log(circle2);


// Contructor Function
// Pascal Notation: OneTwoThreeFour
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
    // return this;
}

const circleUsingConstructor = new Circle(1);
console.log(circleUsingConstructor);

// Both Factory and Constructor functions are euqal and appropriate to use


// Dynamic Nature of Objects
const circleObject = {
    radius: 1
};

// circleObject = {};

circleObject.color = 'yeallow';
circleObject.draw = function() {}

delete circleObject.color;
delete circleObject.draw;

console.log(circleObject);


// Constructor Property
// Every Object has a constructor property
const another = new Circle(1);

let x = {};

// let x = new Object();

new String(); // '', "", ``
new Boolean(); // true, false
new Number(); // 1, 2, 3, ...


// Functions are Objects
const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function() {
    console.log('draw');
}
`);

const newCircle = new Circle1(1);

Circle.call({}, 1) // exactly like const another = new Circle(1);
Circle.apply({}, [1, 2, 3]);


// Value vs. Reference Types
// Value Types -> Number, String, Boolean, Symbol, undefined, null
// Reference Types -> Object, Function, Array

// Primitives are copied by theit value
// Objects are copied by their reference

// primitives
let a = 10;
let b = a;

a = 20;

// reference type
let z = {value: 10};
let d = z;

z.value = 20;

let number = 10;

function increase(number) {
    number++;
}

increase(number);
console.log(number); // 10, because it is pointing to the variable and not the function

let obj = { value: 10 };

function increaseObj(obj) {
    obj.value++;
}

increaseObj(obj); // the object is passed by it's reference and it points to the same object
console.log(obj);


// Enumerating Properties of an Object

const myCircle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in myCircle) {
    console.log(key, myCircle[key]);
}

/* for (let key of myCircle) { // Object is not iterable
    console.log(key);
} */

for (let key of Object.keys(myCircle)) {
    console.log(key);
}

for (let entry of Object.entries(myCircle)) {
    console.log(entry);
}

if ('radius' in myCircle) console.log('yes');


// Cloning an Object

// const anotherObj = {};

/* for (let key in circle) {
    anotherObj[key] = circle[key]; // old
} */

// anotherObj['radius'] = circle['radius'];

/* const anotherObj = Object.assign({
    color: 'yellow'
}, circle); */

const anotherObj = { ...circle };

console.log(anotherObj);


// Garbage Collection
let one = { };
console.log(one); // In JavaScript the Garbe Collector runs automatically in the background, no need to define it


// Math


// String primitive
const message = 'This is my first message';

const messageWithEscapeNotation = 'This is my\n \'first message';
console.log(messageWithEscapeNotation);

console.log(message.indexOf('my'));

// String object
const anotherString = new String('hi');


//Template Literals
// Object {} literals
// Boolean true, fals literals
// String '', "" literals
// Template `` literals
const name = 'John';

const messageTemplateLiterals = `This is my

'first' message,
Regards,
${name}
${3 + 4}`;

console.log(messageTemplateLiterals);


// Date
const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 9, 0);

now.setFullYear(2017);

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());