// Завдання 1

// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
// Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)

// Function declaration - Option1

function calcSquare (width, height) {
    console.log (`Square equals ${width * height}`);
}
calcSquare (13,10)

// Function declaration - Option2

function calculateSquare(width1, height1) {
    return width1 * height1;
}
console.log (calculateSquare(13, 10)); 

// Function expression 

const calculateSquare1 = function(width2, height2) {
    return width2 * height2;
}

console.log(calculateSquare1(13, 10));


// Arrow function

const square = (width3, height3) => {
    return width3 * height3;
}
console.log (square (13,10));