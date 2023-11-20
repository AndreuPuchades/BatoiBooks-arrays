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
        //Renderizar los libros:
        this.books.data.forEach((book) => {
            const DOMBook = this.view.renderBook(book);
            this.addEventListenersToBookElements(book, DOMBook);
        });
        //Eliminar todos los DIV:
        this.view.renderAbout(true);
        this.view.renderForm(true);
        this.view.renderList(true);
        //Renderizar las opciones del formulario:
        this.view.renderOptionsStatus(["good", "new", "bad"]);
        this.view.renderOptionsModules(this.modules.data);
        //Escuchador del HASH:
        await this.addEventListenersVerLibros();
        await this.addEventListenersAbout();
        await this.addEventListenersAnyadirLibro();

        //Escuchador del Submit y del Reset:
        await this.addEventListenersbookForm();
        await this.addEventListenersResetForm();
    }

    addEventListenersHash() {
        if (window.location.hash.substring(1) === "bookForm") {
            this.view.renderForm(false);
            this.view.renderList(true);
            this.view.renderAbout(true);
        } else if(window.location.hash.substring(1) === "list"){
            this.view.renderForm(true);
            this.view.renderList(false);
            this.view.renderAbout(true);
        } else if(window.location.hash.substring(1) === "about"){
            this.view.renderForm(true);
            this.view.renderList(true);
            this.view.renderAbout(false);
        }
    }
    addEventListenersVerLibros(){
        document.getElementById("listHash").addEventListener("click", async () => {
            window.location.hash = "#list";
            this.addEventListenersHash();
        });
    }

    addEventListenersAnyadirLibro(){
        document.getElementById("bookFormHash").addEventListener("click", async () => {
            window.location.hash = "#bookForm";
            this.addEventListenersHash();
        });
    }

    addEventListenersAbout(){
        document.getElementById("aboutHash").addEventListener("click", async () => {
            window.location.hash = "#about";
            this.addEventListenersHash();
        });
    }

    addEventListenersResetForm(){
        this.view.form.addEventListener("reset", async () => {
            this.addEventListenersAnyadirLibro();
            document.querySelector('button[type="submit"]').innerText = "Añadir";
            document.getElementById("id").value = "";
        });
    }

    addEventListenersbookForm(){
        this.view.form.addEventListener("submit", async (event) => {
            event.preventDefault();
            const id = document.getElementById("id").value;
            const idModule = document.getElementById('id-module').value;
            const publisher = document.getElementById('publisher').value;
            const price = parseFloat(document.getElementById('price').value);
            const pages = parseInt(document.getElementById('pages').value);
            const comments = document.getElementById('comments').value;
            const status = document.querySelector('input[name="estado"]:checked').value;

            if(!this.view.validateForm()){
                return;
            }

            if (this.books.getBookFromModule(idModule) === undefined) {
                this.view.renderMessage("error", "Ya existe este modulo.");
                return;
            }

            try {
                const idUser = 2;
                const photo = "";
                const soldDate = "";
                    if(id === ""){
                        const books = this.books.data;
                        const id = (books[books.length - 1].id) + 1;
                        const book = new Book({id, idUser, idModule, publisher, price, pages, status, photo, comments, soldDate});
                        await this.books.addItem(book);
                        const DOMBook = this.view.renderBook(book);
                        this.addEventListenersToBookElements(book, DOMBook);
                    } else {
                        const book = new Book({id, idUser, idModule, publisher, price, pages, status, photo, comments, soldDate});
                        await this.books.changeBook(book);
                        const DOMBook = this.view.editBook(book);
                        this.addEventListenersToBookElements(book, DOMBook);
                    }

                    document.getElementById('bookForm').reset();
                    window.location.hash = "#list";
                    this.addEventListenersHash();
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