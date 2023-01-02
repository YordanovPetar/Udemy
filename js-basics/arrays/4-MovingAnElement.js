/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prefer-const */
/* eslint-disable indent */
/* eslint-disable curly */

const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, 2);

console.log(output);

function move (array, index, offset) {
    const position = index + offset;
    if ((position) < 0 || (position) >= array.length) {
        console.error('Invalid offset.');
        return;
    }

    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(index + offset, 0, element);
    return output;
}
