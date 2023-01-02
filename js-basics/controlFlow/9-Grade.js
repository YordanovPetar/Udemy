const marks = [80, 80, 50];
marks.length

// Average = 70;
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(marks));

function calculateGrade(marks) {  
    const averageGrade = calculateAverage(marks);
    
    if (averageGrade < 60) return 'F';
    if (averageGrade < 70) return 'D';
    if (averageGrade < 80) return 'C';
    if (averageGrade < 90) return 'B';
    return 'A';
}

function calculateAverage(array) {
    let sum = 0;

    for (const value of array) {
        sum += value;
    }

    return sum / array.length;
}