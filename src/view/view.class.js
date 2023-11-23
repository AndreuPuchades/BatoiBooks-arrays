export default class View {
    constructor(){
        this.reset = document.getElementById("reset");
        this.listBooks = document.getElementById("list");
        this.submit = document.getElementById("submit");
        this.about = document.getElementById("about");
        this.bookForm = document.getElementById("bookForm");
        this.remove = document.getElementById("remove");
    }

    renderOptionSelect(book){
        const DOMSelect = document.getElementById("bookForm");
        const DOMId = document.createElement("input");
        DOMId.id = "id";
        DOMId.value = book.id;
        DOMId.type = "hidden";
        DOMSelect.prepend(DOMId);
        document.getElementById(book.idModule).selected = "selected";
        document.getElementById("publisher").value = book.publisher;
        document.querySelector(`input[id=${book.status}]`).checked = true;
        document.getElementById("price").value = Math.floor(book.price);
        document.getElementById("pages").value = Math.floor(book.pages);
        document.getElementById("comments").value = book.comments;
        const button = document.querySelector('button[type="submit"]');
        button.innerText = "Cambiar";
    }

    renderOptionsModules(modules){
        const DOMselect = document.getElementById("id-module");
        modules.forEach((module) => {
            const DOMoption = document.createElement("option");
            DOMoption.textContent = module.cliteral;
            DOMoption.value = module.code;
            DOMoption.id = module.code;
            DOMselect.appendChild(DOMoption);
        });
    }

    renderOptionsStatus(status){
        const DOMselect = document.getElementById("status");
        status.forEach((estado) => {
            const DOMoption = document.createElement("input");
            const DOMoptionLabel = document.createElement("label");
            DOMoptionLabel.id = estado;
            DOMoptionLabel.textContent = estado;
            DOMoption.required = true;
            DOMoption.type = "radio";
            DOMoption.value = estado;
            DOMoption.name = "status";
            DOMoption.id = estado;

            DOMselect.appendChild(DOMoption);
            DOMselect.appendChild(DOMoptionLabel);
        });
    }

    validateForm() {
        if (this.bookForm.checkValidity()) {
            document.querySelectorAll('#bookForm span.error').forEach((span) => {
                span.textContent = '';
            });
            return true;
        }

        Array.from(this.bookForm.elements).forEach((item) => {
            const spanError = item.parentElement.querySelector('span.error');

            if (item.checkValidity()) {
                spanError.textContent = "";
            } else {
                spanError.textContent = item.validationMessage;
            }
        });
    }

    renderList(eliminar){
        if(eliminar){
            this.listBooks.classList.add("oculto");
        } else {
            this.listBooks.classList.remove("oculto");
        }
        return this.listBooks;
    }

    renderAbout(eliminar){
        if(eliminar){
            this.about.classList.add("oculto");
        } else {
            this.about.classList.remove("oculto");
        }
        return this.about;
    }

    renderForm(eliminar){
        if(eliminar){
            this.bookForm.classList.add("oculto");
        } else {
            this.bookForm.classList.remove("oculto");
        }
        return this.bookForm;
    }

    renderBook(book){
        const DOMselect = document.getElementById("list");
        const DOMdivBook = document.createElement("div");
        DOMdivBook.className = "book";
        DOMdivBook.id = "book-" + book.id;
        DOMdivBook.innerHTML = `
        <h2>${book.publisher}</h2>
        <h3>Id: ${book.id}</h3>
        <h3>Editorial: ${book.publisher}</h3>
        <h3>IdModule: ${book.idModule}</h3>
        <h3>Precio: ${book.price}</h3>
        <h3>Paginas: ${book.pages}</h3>
        <h3>Estado: ${book.status}</h3>
        <h3>Comentario: ${book.comments}</h3>
        <button class="add">
            <span class="material-icons">icono add_shopping_cart</span>
        </button>
        <button class="edit">
            <span class="material-icons">icono edit</span>
        </button>
        <button class="delete">
            <span class="material-icons">icono delete</span>
        </button>
        `;

        DOMselect.appendChild(DOMdivBook);
        return DOMdivBook;
    }

    renderDeleteBook(bookId){
        const DOMbook = document.getElementById("book-" + bookId);
        DOMbook.parentElement.removeChild(DOMbook);
        DOMbook.parentElement.removeChild(DOMbook.parentNode);
    }

    editBook(book){
        const DOMSelect = document.getElementById("book-" + book.id);
        DOMSelect.innerHTML = `
        <h2>${book.publisher}</h2>
        <h3>Id: ${book.id}</h3>
        <h3>Editorial: ${book.publisher}</h3>
        <h3>Id: ${book.id}</h3>
        <h3>Precio: ${book.price}</h3>
        <h3>Paginas: ${book.pages}</h3>
        <h3>Estado: ${book.status}</h3>
        <h3>Comentario: ${book.comments}</h3>
        <button class="add">
            <span class="material-icons">icono add_shopping_cart</span>
        </button>
        <button class="edit">
            <span class="material-icons">icono edit</span>
        </button>
        <button class="delete">
            <span class="material-icons">icono delete</span>
        </button>
        `;
        return DOMSelect;
    }

    renderMessage(type, message){
        const DOMSelect = document.getElementById("message");
        const DOMnewMessage = document.createElement('div');
        DOMnewMessage.innerHTML = `${message} <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="this.remove.remove()">x</button> `;
        DOMnewMessage.className  = type + "alert alert-danger alert-dismissible";
        DOMnewMessage.setAttribute('role',"alert");
        DOMSelect.appendChild(DOMnewMessage);
    }
}