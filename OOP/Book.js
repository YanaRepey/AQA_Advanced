export class Book {
    _bookName;
    _bookAuthor;
    _bookYear;

    constructor(bookName, bookAuthor, bookYear) {
        this.bookName = bookName;
        this.bookAuthor = bookAuthor;
        this.bookYear = bookYear;
    }
    printInfo() {
        console.log(
            `Назва: ${this._bookName}, Автор: ${this._bookAuthor}, Рік: ${this._bookYear}.`
        );
    }
    set bookName(value) {
        if (typeof value === "string" && value.length > 0) {
            this._bookName = value;
        }
    }
    get bookName() {
        return this._bookName;
    }
    set bookAuthor(value) {
        if (typeof value === "string" && value.length > 0) {
            this._bookAuthor = value;
        }
    }

    get bookAuthor() {
        return this._bookAuthor;
    }

    set bookYear(value) {
        if (Number.isInteger(value)) {
            this._bookYear = value;
        }
    }

    get bookYear() {
        return this._bookYear;

    }
    static oldestBook(arrayOfBooks) {
        let min = 0;
        for (let i = 1; i < arrayOfBooks.length; i++) {
          if (arrayOfBooks[i].bookYear < arrayOfBooks[min].bookYear) {
            min = i;
          }
        }
        return arrayOfBooks[min];
      }
    }


