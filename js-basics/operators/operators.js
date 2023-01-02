// Operators - Arithmetic, Assignment, Comparison, Logical, Bitwise
console.log('Operators');

// Arithmetic Operators
let x = 10
let y = 3;

// Increment (++)
console.log(x++);
console.log(x);

// Decrement (--)
console.log(--x);

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

// Assignment Operator
// x++ is the same as x = x + 1;

console.log(x += 5);

console.log(x = x * 3);
console.log(x *= 3);

// Comparison Operator
let num = 1;

// Relational
console.log(num > 0);
console.log(num >= 1);
console.log(num < 1);
console.log(num <= 1);

// Equality
console.log(num === 1);
console.log(num !== 1);

// Strict Equality operator (Type + Value)
console.log('Strict Equality');
console.log(1 === 1);
console.log('1' === 1);

// Lose Equality
console.log('Lose Equality');
console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);

// Ternary Operator
console.log('Ternary/Conditional Operator');

// If a customer has more than 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

let points = 110;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);

// Logical Operators
console.log('Logical Operator');

// Logical AND ($$)
// Returns TRUE if both operands are TRUE
console.log(true && true);


// Logical OR (||)
// Returns true if one of the operands is TRUE
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible', eligibleForLoan);

// NOT (!)
let applicationRefused = !eligibleForLoan;

console.log('Application refused', applicationRefused);

// Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN

// Anything that is not Falsy -> Truthy

// Short-circuiting

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);

// BitWise Operators
console.log('BitWise Operator');

// 1 = 00000001 (8bits)
// 2 = 00000010

// R = 00000011 = 3
console.log(1 | 2); // Bitwise OR

// R = 00000000 = 0
console.log(1 & 2); // Bitwise AND

// Read, Write, Execute
// 00000100 - Read
// 00000110 - Write
// 00000001 - Execute

// Access control system using bitwise operators

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission);

let message =
 (myPermission & readPermission) ? 'yes' : 'no';

 console.log(message);

 console.log('Operator Precedence');

 let calculationExpression = (2 + 3) * 4;
 console.log(calculationExpression);

console.log('Operators');