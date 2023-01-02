showStars(5);

function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';

        for (let j = 0; j < row; j++) {
            pattern += '*';
        }
        
        console.log(pattern);
    }
}