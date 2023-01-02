let a = 'red';
let b = 'blue';

console.log(a);
console.log(b);

// Object
let swappedVariables = {
    b,
    a
};

console.log(swappedVariables);

// Array
let swappedVariablesArray = [a, b];

console.log(swappedVariablesArray[1]);
console.log(swappedVariablesArray[0]);

// Third variable
let c = a;
a = b;
b = c;

console.log(a);
console.log(b);