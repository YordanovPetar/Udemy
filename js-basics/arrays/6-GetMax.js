/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prefer-const */
/* eslint-disable indent */
/* eslint-disable curly */

const numbers = [1, 2, 7, 3];

const max = getMax(numbers);

console.log(max);

function getMax (array) {
    if (array.length === 0) return undefined;

    // let maxNum = array[0];

    // for (let i = 1; i < array.length; i++) {
    //     if (array[i] > maxNum)
    //         maxNum = array[i];
    // }

    // return maxNum;

    return array.reduce((a, b) => (a > b) ? a : b);
}