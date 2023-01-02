const numbers = [1, 2, 3, 4, 1, 1, 5];

const output = except(numbers, [1, 2]);

console.log(output);

function except(array, excluded) {
    const exceptArr = [];

    for (let element of array)
        if (!excluded.includes(element))
            exceptArr.push(element);
 
    return exceptArr;
}
