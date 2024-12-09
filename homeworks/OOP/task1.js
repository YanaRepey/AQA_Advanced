import { Book } from './Book.js';
import { Ebook } from './Ebook.js';

const book = new Book('Дюна', 'Френк Герберт', 1963);
console.log(book);
book.printInfo();

const ebook = new Ebook('Дюна', 'Френк Герберт', 1963, 'epub');
console.log(ebook);
ebook.printInfo();

const books = [
	{
		bookName: 'Лис Микита',
		bookAuthor: 'Іван Франко',
		bookYear: 1902,
	},
	{
		bookName: 'Три товариші',
		bookAuthor: 'Еріх Марія Ремарк',
		bookYear: 1946,
	},
	{
		bookName: 'Вершник без голови',
		bookAuthor: 'Майн Рід',
		bookYear: 1967,
	},
	{
		bookName: 'Таємна історія',
		bookAuthor: 'Донна Тарт',
		bookYear: 2022,
		bookFormat: 'fb2',
	},
];
const oldest = Book.oldestBook(books);
console.log('Найстаріша книга:', oldest);

const book1 = new Book('Щиголь', 'Донна Тарт', 2021);
const format = 'pdf';
let ebook1 = Ebook.convertBook(book1, format);
console.log(ebook1);
