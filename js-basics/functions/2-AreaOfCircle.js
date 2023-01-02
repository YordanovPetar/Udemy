/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prefer-const */
/* eslint-disable indent */
/* eslint-disable curly */

// circle.radius = 2;
// circle.area (read-only);

const circle = {
    radius: 2,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
};

circle.radius = 17;

console.log(circle.radius);
console.log(circle.area);