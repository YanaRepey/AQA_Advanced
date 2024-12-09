// Завдання 1

// Напишіть функцію яка буде приймати 2 аргументи - довільний текст як перший аргумент та кількість мілісекунд як другий аргумент. Функція повинна вивести в консоль переданий текст через вказану кількість мілісекунд

const delay = 4580;
const myText = `Sorry, I'm late for ${delay / 1000} second(s)`;

function delayedMessage(msg, time) {
	setTimeout(function () {
		console.log(msg);
	}, time);
}

delayedMessage(myText, delay);
