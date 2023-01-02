/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prefer-const */
/* eslint-disable indent */
/* eslint-disable curly */

try {
    const numbers = [1, 2, 3, 4];
    const count = countOccurences(true, 1);
    console.log(count);
}
catch (e) {
    console.log(e.message);
}

function countOccurences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Invalid array.');

    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        return accumulator + occurence;
    }, 0);
}