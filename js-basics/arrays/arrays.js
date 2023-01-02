// Adding Elements

const numbers = [3, 4];

// End
numbers.push(5, 6);

// Beginning
numbers.unshift(1, 2);

// Middle
numbers.splice(2, 0, 'a', 'b');

console.log(numbers);


// Finding Elements (Primitives)
const nums = [1, 2, 3, 1, 4];

console.log(nums.indexOf('a'));
console.log(nums.lastIndexOf(1));

console.log(nums.indexOf(1) !== -1);
console.log(nums.includes(1));

console.log(nums.indexOf(1, 2));


// Finding Elements (Reference Types)
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 3, name: 'c' }
];

const course = courses.find(function(course) {
    return course.name === 'a';
});

console.log(course);

const courseByIndex = courses.findIndex(function(course) {
    return course.name === 'xyz';
});

console.log(courseByIndex);


// Arrow Functions
const courseFindWithArrowFunction = courses.find(course => course.name === 'a');

console.log(courseFindWithArrowFunction);


// Removing Elements
const numbersN = [1, 2, 3, 4];

// End
numbersN.push();
const last = numbersN.pop();
console.log(numbersN);
console.log(last);

// Beginning
numbersN.unshift();
const first = numbersN.shift();
console.log(numbersN);
console.log(first);

// Middle
numbersN.splice();
const middle = numbersN.splice(1, 1); // remove at index 1, remove 1 element
console.log(numbersN); // [2]
console.log(middle); // [3]


// Empty Array - Either solution 2 or 1
let numbersEA = [1, 2, 3, 4];
let another = numbersEA;

// Solution 1
// numbersEA = [];
// console.log(numbersEA); // pointing to the empty array
// console.log(another); // pointing to the original array

// Solution 2
// numbersEA.length = 0;

// Solution 3
// numbersEA.splice(0, numbersEA.length);

// Solution 4
while (numbersEA.length > 0)
    numbersEA.pop();

console.log(numbersEA);
console.log(another);


// Combining and Slicing Arrays
const firstArr = [{ id: 1 }];
const secondArr = [4, 5, 6];

const combined = firstArr.concat(secondArr);
firstArr[0].id = 10;

const sliced = combined.slice();

console.log(combined);
console.log(sliced);


// The Spread Operator
const combinedSpread = [...firstArr, 'a', ...secondArr, 'b'];
const copy = [...combinedSpread];

console.log(combinedSpread);
console.log(copy);

// Iterating an Array
const newNumArr = [1, 2, 3];

for (let number of newNumArr)
    console.log(number);

newNumArr.forEach((number, index) => console.log(index, number));

// Joining Arrays
const arr = [1, 2, 3];
const joined = arr.join(', ');
console.log(joined);

const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);

const newJoined = parts.join('-');
console.log(newJoined);

// Sorting Arrays
const notSortedNumbers = [2, 3, 1];
notSortedNumbers.sort();
console.log(notSortedNumbers);

notSortedNumbers.reverse();
console.log(notSortedNumbers);

const itCourses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'javaScript' },
];

itCourses.sort(function(a, b) {
    // a < b => -1
    // a > b => 1
    // a === b => 0
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(itCourses);

// Testing the Elements of an Array
const newNumbers = [1, -1, 2, 3];

// every()
// some()

const atLeastOnePositive = newNumbers.some(function(value) {
    return value >= 0;
});

console.log(atLeastOnePositive);

// Filtering an Array
const numsArr = [1, -1, 2, 3];

const filtered = numsArr.filter(n => n >= 0);

console.log(filtered);


// Mapping an Array
const items = filtered.map(n => '<li>' + n + '</li>');
const html = '<ul>' + items.join('') + '</ul>';
console.log(html);

// const itemsMappedToObj = filtered.map(n => ({ value: n}) );

const itemsMappedToObj = numsArr
    .filter(n => n >= 0)
    .map(n => ({ value: n}) )
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(itemsMappedToObj);


// Reducing an Array
let sum = 0;
for (let n of numsArr)
    sum += n;

console.log(sum);

// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c= 3 => a = 5
const sumSingleValue = numsArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sumSingleValue);