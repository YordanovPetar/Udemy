/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prefer-const */
/* eslint-disable indent */
/* eslint-disable curly */

const numbers = [1, 2, 3, 4, 1];

const count = countOccurences(numbers, 1);

console.log(count);

function countOccurences (array, searchElement) {
    // let occurences = 0;
    // for (let element of array) {
    //     if (element === searchElement) {
    //         occurences++;
    //     }
    // }
    // return occurences;

    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurence;
    }, 0);
}
