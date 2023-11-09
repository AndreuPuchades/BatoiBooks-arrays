import Book from "./book.class.js";

export default class Cart{
    constructor() {
        this.data = [];
    }

    populateData() {
    }

    addItem(book) {
        const newBook = new Book(book);
        this.data.push(newBook);
        return this.getBookById(book.id) !== undefined;
    }

    removeItem(idBook) {
        this.data = this.data.filter(book => book.id !== idBook);
        return this.getBookById(idBook) === undefined;
    }

    getBookById(idBook) {
        if(this.data.length !== 0){
            return this.data.find((item) => item.id === idBook)
        } else {
            return undefined;
        }
    }
}