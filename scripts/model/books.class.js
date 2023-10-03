import book from "./book.class"

export default class Books {
    constructor() {
      this.books = []
    }

    populateData(array){
        array.forEach(usuario => {
            this.books.push(new book(id = usuario.id, idUser = usuario.idUser,  idModule = usuario.idModule,  publisher = usuario.publisher,  price = usuario.price,  pages = usuario.pages,  status = usuario.status, photo = usuario.photo, comments = usuario.comments, soldDate = usuario.soldDate));
        });
    }

    addItem(bookNew) {
        if(bookNew instanceof book){
            this.books.push(bookNew);
        }
    }
    
    removeItem(number) {
        indice = this.books.findIndex(libro, libro.id == number);
        if(indice > 0){
            this.books.slice(indice, indice + 1);
        } else {
            console.log("No existe un libro con la id " + number);
        }
    }

    getItemById(number){
        libro = this.books.find(libro, libro.id == number);
        if(libro == undefined){
            return {};
        } else {
            return libro;
        }
    }

    getItemByCode(number){
        indice = this.books.findIndex(libro, libro.id == number);
        if(indice > 0){
            return indice;
        } else {
            console.log("No existe un libro con la id " + number);
        }
    }

    toString(){
        return `Existen en catalogo ${this.books.length} libro.`;
    }
}