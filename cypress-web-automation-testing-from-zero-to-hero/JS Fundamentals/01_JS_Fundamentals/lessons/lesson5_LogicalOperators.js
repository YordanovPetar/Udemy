// Logical Operators
console.log(true && true); // all values have to be true for expression to be TRUE
console.log(true && false);
console.log(true || false); // Logical "OR". Any value to be TRUE for the xpression to be TRUE
console.log(false || false);

let ageIsMoreThanEighteen = false;
let isUSCitizen = true;

let eligibilityForDriversLicense = ageIsMoreThanEighteen && isUSCitizen;
console.log('This customer is eligible for DL: ' + eligibilityForDriversLicense);

// Logical "NOT"
console.log(!true);
console.log(6 !== 10);