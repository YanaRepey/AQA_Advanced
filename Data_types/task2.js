// Завдання 2: Конкатенація радків та шаблонний рядок

// Створіть дві змінні, які містять імена двох осіб. Використовуючи конкатенацію рядків, створіть новий рядок, який містить вітання для обох осіб. Виведіть результат в консоль. Потім використайте шаблонний рядок для створення того ж вітання. Виведіть результат в консоль.

let name1 = "Chip";
let name2 = 'Dale';

let greetingToChipmunk = "Hi dear" + " " + name1 + " " + "and" + " " + name2 + "!";
console.log (greetingToChipmunk);

let greeting = `Hi dear ${name1} and ${name2}! You're my sweet childhood memories!`;
console.log (greeting);
