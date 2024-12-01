// Завдання 5
// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

const users = [
    { name: "Tom", email: "tom@gmail.com", age: 21 },
    { name: "Jerry", email: "jerry@gmail.com", age: 25},
    { name: "Mouse", email: "mouse@gmail.com", age: 22 }
  ];
  
  for (const { name, email, age } of users) {
    console.log(`Ім'я: ${name}, Email: ${email}, Вік: ${age}`);
  }
