/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prefer-const */
/* eslint-disable indent */
/* eslint-disable curly */

// 1- Function Declarations vs. Expressions
console.log('1- Function Declarations vs. Expressions:');

// Function Declaration - can call the function before the declaration
walk();

function walk() {
    console.log('walk');
}

// Named Function Expression
let runNamed = function walk() {
    console.log('run');
};

// Anonymous Function Expression
// cannot call the function before the declaration
// run();

let run = function () {
    console.log('run');
};

let move = run;
move();

// Hoisting is the proccess of moving function declarations on the top of the file, done automatically by the Java Script engine

// Arguments
console.log('Arguments:');
function sum() {
    let total = 0;
    for (let value of arguments) {
        total += value;
    }

    return total;
}

console.log(sum(1, 2, 3, 4, 5, 10));

// The Rest Operator
console.log('The Rest Operator:');
function sumWithRestOperator(discount, ...prices) {
    console.log('discount: ' + discount);
    console.log('prices: ' + prices);

    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(sumWithRestOperator(0.1, 20, 30, 1));

// Default Parameteres
console.log('Default Parameters:');
function interest(principal, rate = 3.5, years = 5) {
    // rate = rate || 3.5;
    // years = years || 5;

    return principal * rate / 100 * years;
}

console.log(interest(1000));

// Getters and Setters
console.log('Getters and Setters: ');
const person = {
    firstName: 'Mitko',
    lastName: 'Dimitrov',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('Value is not a string.');

        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter a first and last name.');

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person.fullName = '';
}
catch (e) {
   alert(e);
}

// getters = > access properties
// setters => change (mutate) them

console.log(person);

// Loval vs. Global Scope
console.log('Local vs. Global Scope:');

// Global Scope
const color = 'red';

// Local Scope
function startF() {
    const message = 'hi';   
    // Local constant is with higher priority than global. Defining global constants should be avoided
    const color = 'blue';
    console.log(color);
}

function endF() {
    const message = 'bye';
}

startF();

// Let vs Var
// Var - it's scope is not limited to the block in which it is defined. It is limited to the function in which it is defined
// var => function-scoped variables
// ES6 (ES2015): let, const => block-scoped
console.log('Let vs Var:');

function start() {
    for (var i = 0; i < 5; i++) {
        if (true) {
            var color = 'red';
        }
    }

    console.log(color);
}

start();

// Global variable var is attached to the Window object in the browser, let is not
var redColor = 'red';
let age = 30;

// Bad practice to attach function to the Window object. Functions should be encapsulated in modules
function sayHi() {
    console.log('hi');
}

// The This Keyword
// method -> obj
// function -> global (window, global)
console.log('The This Keyword:');

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    play() {
        console.log(this);
    },
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag)
        }, this);
    }
};

video.stop = function() {
    console.log(this);
};

video.play();
video.stop();

function Video(title) {
    this.title = title;
    console.log(this);
}

const v = new Video('aa');

video.showTags();

// Changing This
console.log('Changing This');

const videoScene = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag)
        });
    }
};

videoScene.showTags();

function playVideo(a, b) {
    console.log(this);
}

playVideo.call({ name: 'Ivan' }, 1, 2);
playVideo.apply({ name: 'Ivan' }, [1, 2]);
playVideo.bind({ name: 'Mitko' })();

playVideo();
