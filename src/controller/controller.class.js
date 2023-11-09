import Book from "../model/book.class";
import Books from "../model/books.class";
import Modules from "../model/modules.class";
import Users from "../model/users.class";
import View from "../view/view.class";
import Cart from "../model/Cart.js";

export default class Controller {
    constructor() {
        this.books = new Books();
        this.modules = new Modules();
        this.users = new Users();
        this.cart = new Cart();
        this.view = new View();
    }

    async init() {
        await this.books.populateData();
        await this.modules.populateData();
        await this.users.populateData();
        this.books.data.forEach((book) => {
            const DOMBook = this.view.renderBook(book);
            this.addEventListenersToBookElements(book, DOMBook);
        });

        //Eliminar todos los DIV:
        this.view.renderAbout(true);
        this.view.renderForm(true);
        this.view.renderList(true);
        //Renderizar las opciones del formulario:
        await this.view.renderOptionsStatus(["good", "new", "bad"]);
        await this.view.renderOptionsModules(this.modules.data);
        await this.addEventListenersVerLibros();
        await this.addEventListenersAbout();
        await this.addEventListenersAnyadirLibro();
        await this.addEventListenersbookForm();
        await this.addEventListenersResetForm();
    }

    addEventListenersVerLibros(){
        document.querySelector('a[href="#list"]').addEventListener("click", async () => {
            this.view.renderForm(true);
            this.view.renderList(false);
            this.view.renderAbout(true);
        });
    }

    addEventListenersAnyadirLibro(){
        document.querySelector('a[href="#bookForm"]').addEventListener("click", async () => {
            this.view.renderForm(false);
            this.view.renderList(true);
            this.view.renderAbout(true);
        });
    }

    addEventListenersAbout(){
        document.querySelector('a[href="#about"]').addEventListener("click", async () => {
            this.view.renderForm(true);
            this.view.renderList(true);
            this.view.renderAbout(false);
        });
    }

    addEventListenersResetForm(){
        this.view.form.addEventListener("reset", async () => {
            this.addEventListenersAnyadirLibro();
        });
    }

    addEventListenersbookForm(){
        this.view.form.addEventListener("submit", async (event) => {
            event.preventDefault();

            const idBook = document.getElementById("id").value;
            const idModule = document.getElementById('id-module').value;
            const publisher = document.getElementById('publisher').value;
            const price = parseFloat(document.getElementById('price').value);
            const pages = parseInt(document.getElementById('pages').value);
            const comments = document.getElementById('comments').value;
            const status = document.querySelector('input[name="estado"]:checked').value;

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
                const idUser = 2;
                const photo = "";
                const soldDate = "";
                if(idBook === ""){
                    const books = this.books.data;
                    const id = (books[books.length - 1].id) + 1;
                    const book = new Book({id, idUser, idModule, publisher, price, pages, status, photo, comments, soldDate});
                    await this.books.addItem(book);
                    document.getElementById('bookForm').reset();
                    const DOMBook = this.view.renderBook(book);
                    this.addEventListenersToBookElements(book, DOMBook);
                } else {
                    const book = new Book({idBook, idUser, idModule, publisher, price, pages, status, photo, comments, soldDate});
                    await this.books.changeBook(book);
                    this.view.editBook(book);
                }

            } catch (error) {
                this.view.renderMessage('error', error);
            }
        });
    }

    addEventListenersToBookElements(book, DOMBook) {
        DOMBook.querySelector(".delete").addEventListener("click", async () => {
            if (await this.books.removeItem(book.id)) {
                this.view.renderDeleteBook(book.id);
                this.view.renderMessage("message", "El libro se ha eliminado correctamente.");
            } else {
                this.view.renderMessage("error", "El libro no se ha eliminado correctamente.");
            }
        });

        DOMBook.querySelector(".edit").addEventListener("click", async () => {
            this.view.renderForm(false);
            this.view.renderList(true);
            this.view.renderAbout(true);
            this.view.renderOptionSelect(book);
        });

        DOMBook.querySelector(".add").addEventListener("click", async () => {
            if (this.cart.getBookById(book.id) === undefined) {
                this.view.renderMessage("error", "El libro ya está añadido. Carrito: " + this.cart.data.length);
            } else {
                this.cart.addItem(book);
                const view = "El libro se ha añadido correctamente. Carrito: " + this.cart.data.length;
                this.view.renderMessage("error", view);
            }
        });
    }
}