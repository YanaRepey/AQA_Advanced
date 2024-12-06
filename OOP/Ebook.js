import { Book } from "./Book.js";
export class Ebook extends Book {
  _bookFormat;
  constructor(bookName, bookAuthor, bookYear, bookFormat) {
    super(bookName, bookAuthor, bookYear);
    this.bookFormat = bookFormat;
  }

  set bookFormat(value) {
    if (typeof value === "string" && value.length > 0) {
      this._bookFormat = value;
    } 
  }

  get bookFormat() {
    return this._bookFormat;
  }

  printInfo() {
    console.log(`Назва: ${this._bookName}, Автор: ${this._bookAuthor}, 
        Рік: ${this._bookYear}, Формат файлу: ${this._bookFormat}`);
  }

  static convertBook(paperBook, format) {
    const newEbook = new Ebook(
      paperBook.bookAuthor,
      paperBook.bookYear, 
      format
    );
    return newEbook;
  }
}