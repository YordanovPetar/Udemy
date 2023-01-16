// Conditional statements

// if (condition) {
//     // execute some code here
// } else {
//     // execute some code here
// }

// print different message on the console based on the time
// If hour between 6 and 12 print "Good Morning"
// If hour between 12 and 18 print "Good Afternoon"
// Otherwise: Good Evening

let hour = 6;

if (hour >= 6 && hour < 12) {
    console.log('Good Morning');
} else if (hour >= 12 && hour < 18) {
    console.log('Good Afternoon');
} else {
    console.log('Good Evening');
}

let ageIsMoreThanEighteen = true;
let isUSCitizen = true;

if (ageIsMoreThanEighteen && isUSCitizen) {
    console.log('This customer is eligible for DL');
} else {
    console.log('This customer is not eligible for DL');
}
