// Falsy
// undefined
// null
// ''
// false
// 0
// NaN

const array = [1, 2, 0, NaN, false];

console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;

    for (const char of array) {
        if (char) count++;
    }

    return count;
}