import Book from "./Book.class";

export default class Books {
  constructor() {
    this.data = [];
  }

  populateData(arrayBooks) {
    arrayBooks.forEach((book) => {this.data.push(new Book(book));});
  }

  addItem(book) {
    (!this.data.length)? book.id = 1 : book.id = this.getIdBooks();
    this.data.push(new Book(book));
    return new Book(book);
  }

  removeItem(id) {
    const itemToRemove = this.getItemById(id);
    if (itemToRemove === -1) {
      throw Error("No existe la Id");
    }
    this.data = this.data.filter(function (book) {
      return book.id !== id;
    });
    return {};
  }

  getItemById(id) {
    return new Book(this.data.find((book) => book.id === id));
  }

  booksFromUser(idUser) {
    const newBooks = new Books();
    const booksFiltrered = this.data.filter((value) => value.idUser === idUser);
    newBooks.populateData(booksFiltrered);
    return newBooks;
  }

  booksFromModule(module) {
    let newBooks = this.data.filter((book) => book.idModule == module);
    let books  = new Books();
    books.populateData(newBooks);
    return books;
  }

  booksCheeperThan(price) {
    if (!isArrayAndContainsInfo(this.data)) {
      return [];
    }

    if (Number.isNaN(price) && isPositive(price)) {
      return [];
    }

    let newBooks = this.data.filter((book) => book.price <= price);
    let books = new Books();
    books.populateData(newBooks);
    return books;
  }

  booksWithStatus(status) {
    let books = new Books();

    if (["bad", "good", "new"].includes(status)) {
      let newBooks = this.data.filter((book) => book.status == status);
      books.populateData(newBooks);
      return books;
    }

    return books;
  }

  averagePriceOfBooks() {
    if (!isArrayAndContainsInfo(this.data)) {
      return "0.00 €";
    }
    return (
      (
        this.data.reduce((total, book) => (total += book.price), 0) /
        this.data.length
      ).toFixed(2) + " €"
    );
  }

  booksOfTypeNote() {
    if (!isArrayAndContainsInfo(this.data)) {
      return [];
    }

    let newBooks = this.data.filter((book) => book.publisher === "Apunts");
    const books = new Books();
    books.populateData(newBooks);
    return books;
  }

  booksNotOfTypeNote() {
    if (!isArrayAndContainsInfo(this.data)) {
      return [];
    }

    let newBooks = this.data.filter((book) => book.publisher !== "Apunts");
    const books = new Books();
    books.populateData(newBooks);
    return books;
  }

  booksNotSold() {
    if (!isArrayAndContainsInfo(this.data)) {
      return [];
    }
    return new Books(this.data.filter((book) => book.soldDate === ""));
  }

  incrementPriceOfbooks(porcentaje) {
    if (!isArrayAndContainsInfo(this.data)) {
      return;
    }

    if (!isValidPercentaje(porcentaje)) {
      return;
    }
    return this.data.map((book) => (book.price += book.price * (porcentaje)));
  }

  getIdBooks(){
    let mayor = this.data.reduce((mayor, book) => (Math.max(mayor, book.id)), 0);
    return ++mayor;
}


toString() {
  let toString = "Libros (total " + this.data.length +")";

  this.data.forEach(book => {
      toString += "\n    - " + book.toString();
  });
  return toString;
}
}

function isPositive(number) {
  return number >= 0;
}

function isValidPercentaje(porcentaje) {
  return (
    !Number.isNaN(porcentaje) && porcentaje >= 0.01 && porcentaje <= 0.99
  );
}

function isArrayAndContainsInfo(array) {
  return Array.isArray(array) && array.length;
}