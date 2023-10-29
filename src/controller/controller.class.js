import Book from "../model/book.class";
import Books from "../model/books.class";
import Modules from "../model/modules.class";
import Users from "../model/users.class";
import View from "../view/view.class";

export default class Controller {
    constructor() {
        this.books = new Books();
        this.modules = new Modules();
        this.users = new Users();
        this.view = new View();
    }

    async init() {
        await this.books.populateData();
        await this.modules.populateData();
        await this.users.populateData();
        this.view.renderOptionsModules(this.modules.data);
        this.view.renderOptionsStatus(["good", "new", "bad"]);
        this.books.data.forEach((book) => {
            this.view.renderBook(book);
        });
        
        this.view.remove.addEventListener("click", async (event) => {
            const bookId = prompt("Intoduce una id:");

            try {
                await this.books.removeItem(bookId);
            } catch (error) {
                this.view.renderMessage("error", error);
            }
            this.view.renderDeleteBook(bookId);
        })

        this.view.bookForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const idModule = document.getElementById('id-module').value;
            const publisher = document.getElementById('publisher').value;
            const price = parseFloat(document.getElementById('price').value);
            const pages = parseInt(document.getElementById('pages').value);
            const comments = document.getElementById('comments').value;
            const status = document.getElementsByName('estado').name;

            if (idModule === "- Selecciona un módulo -") {
                this.view.renderMessage("error", "Selecciona un módulo.");
                return;
            }

            if (status === '') {
                this.view.renderMessage("error", 'Selecciona un estado.');
                return;
            }

            if (isNaN(price) || price <= 0) {
                this.view.renderMessage("error", "Ingresa un precio válido mayor que 0.");
                return;
            }

            if (isNaN(pages) || pages <= 0) {
                this.view.renderMessage("error", "Ingresa un número de páginas válido mayor que 0.");
                return;
            }

            try {
                const id = (this.books.data[this.books.data.length - 1].id) + 1;
                const idUser = 2;
                const photo = "";
                const soldDate = "";
                const book = new Book({id, idUser, idModule, publisher, price, pages, status, photo, comments});
                await this.books.addItem(book);
                document.getElementById('bookForm').reset();
                this.view.renderBook(book);
            } catch (error) {
                this.view.renderMessage('error', error);
            }
        });
    }
}