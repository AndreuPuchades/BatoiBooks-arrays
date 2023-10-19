import Book from "./book.class";
import BooksRepository from "../repositories/books.repository";

export default class Books {
  constructor() {
    this.data = [];
  }

  getBookById(id) {
    return this.data.find((item) => item.id === id) || {};
  }

  async populateData() {
    const repositoryBooks = new BooksRepository();
    const books = await repositoryBooks.getAllBooks();
    this.data = books.map((item) => new Book(item));
  }

  async addItem(bookNew) {
    const repositoryBooks = new BooksRepository();
    const book = await repositoryBooks.addBook(bookNew);
    const newBook = new Book(book);
    this.data.push(newBook);
    return newBook;
  }

  async removeItem(id) {
    const repositoryBooks = new BooksRepository();
    await repositoryBooks.removeBook(id);
    const index = this.data.findIndex((item) => item.id === id);
    this.data.splice(index, 1);
    return {};
  }

  toString() {
    let booksToString = `Libros (total ${this.data.length})`
    this.data.forEach((item) => booksToString += `
    - ${item}`);
    return booksToString;
  }

  booksFromUser(idUser) {
    const books = new Books();
    books.data = this.data.filter((item) => item.idUser === idUser);
    return books;
  }

  booksFromModule(idModule) {
    const books = new Books();
    books.data = this.data.filter((item) => item.idModule === idModule);
    return books;
  }

  booksCheeperThan(precio) {
    const books = new Books();
    books.data = this.data.filter((item) => item.price <= precio);
    return books;
  }

  booksWithStatus(status) {
    const books = new Books();
    books.data = this.data.filter((item) => item.status === status);
    return books;
  }

  averagePriceOfBooks() {
    const sum = this.data.reduce((total, item) => total + item.price, 0);
    if(this.data.length){
      return (sum / this.data.length).toFixed(2) + ' €' ;
    } else {
      return '0 €';
    }
  }

  booksOfTypeNote() {
    const books = new Books();
    books.data = this.data.filter((item) => item.publisher === 'Apunts');
    return books;
  }

  booksNotOfTypeNote() {
    const books = new Books();
    books.data = this.data.filter((item) => item.publisher !== 'Apunts');
    return books;
  }

  booksNotSold() {
    const books = new Books();
    books.data = this.data.filter((item) => !item.soldDate);
    return books;
  }

  async incrementPriceOfbooks(number) {
    const repository = new BooksRepository();
    this.data.forEach(async (book) => {
      bookNew = await repository.updatePriceOfBook(book.id, (book.price * (1 + number)));
      book.price = bookNew.price;
    });
  }
}