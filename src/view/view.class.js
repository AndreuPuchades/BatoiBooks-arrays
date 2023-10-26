export default class View {
    constructor(){
        this.list = document.getElementById("list");
        this.bookForm = document.getElementById("bookForm");
        this.remove = document.getElementById("remove");
    }

    renderOptionsModules(modules){
        const DOMselect = document.getElementById("id-module");
        modules.forEach((module) => {
            const DOMoption = document.createElement("option");
            DOMoption.textContent = module.cliteral;
            DOMoption.value = module.code;

            DOMselect.appendChild(DOMoption);
        });
    }

    renderOptionsStatus(status){
        const DOMselect = document.getElementById("estado");
        status.forEach((estado) => {
            const DOMoption = document.createElement("input");
            const DOMoptionLabel = document.createElement("label");
            DOMoptionLabel.id = "estado";
            DOMoptionLabel.textContent = estado;
            DOMoption.type = "radio";
            DOMoption.value = estado;
            DOMoption.name = "estado";
            DOMoption.id = "estado";

            DOMselect.appendChild(DOMoption);
            DOMselect.appendChild(DOMoptionLabel);
        });
    }

    renderBook(book){
        const DOMselect = document.getElementById("list");
        const DOMdivBook = document.createElement("div");
        const DOMdiv = document.createElement("div");
        DOMdiv.id = "book";
        DOMdivBook.id = "book-" + book.id;
        DOMdiv.innerHTML = `
        <h2>${book.publisher}</h2>
        <h3>Id: ${book.id}</h3>
        <h3>Editorial: ${book.publisher}</h3>
        <h3>Id: ${book.id}</h3>
        <h3>Precio: ${book.price}</h3>
        <h3>Paginas: ${book.pages}</h3>
        <h3>Estado: ${book.status}</h3>
        <h3>Comentario: ${book.comments}</h3>
        `;
        DOMdivBook.appendChild(DOMdiv);
        DOMselect.appendChild(DOMdivBook);
    }

    renderDeleteBook(bookId){
        const DOMbook = document.getElementById("book-" + bookId);
        DOMbook.parentElement.removeChild(DOMbook);
    }

    renderMessage(type, message){
        const DOMnewMessage = document.createElement('div')
        DOMnewMessage.innerHTML = `${message} <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="this.parentElement.remove()">x</button> `
        DOMnewMessage.className  = type + "alert alert-danger alert-dismissible"
        DOMnewMessage.setAttribute('role',"alert")

        this.messages.appendChild(DOMnewMessage)
    }
}