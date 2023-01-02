/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prefer-const */
/* eslint-disable indent */
/* eslint-disable curly */

const numbers = [1, 2, 3, 4];

console.log(includesNum(numbers, 2));

function includesNum(array, searchElement) {
    for (let element of array)
        if (element === searchElement)
            return true;
    return false;
}
