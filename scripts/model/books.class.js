import book from "./book.class"

export class Books {
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
            return {};
        }
    }

    getItemById(number){
        libro = this.books.find(libro, libro.id == number);
        if(libro == undefined){
            console.log("No existe un libro con la id " + number);
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
            return {};
        }
    }

    booksFromUser(userId) {
        return this.books.filter((item) => item.idUser === userId);
    }
    
    booksFromModule(string) {
        return this.books.filter(book => book.idModule == string);
    }
    
    booksCheeperThan(number){
        return this.books.filter(book => book.price <= number);
    }
    
    booksWithStatus(string){
        return this.books.filter(book => book.status == string);
    }
    
    averagePriceOfBooks(){
        if (!isArrayAndContainsInfo(this.books)) {
            return "0.00 €";
          }
    
        return (this.books.reduce((total, book) => total += book.price, 0) / this.books.lenght).toFixed(2) + ' €';
    }
    
    booksOfTypeNote() {
        return this.books.filter(book => book.publisher == 'Apunts');
    }
    
    booksNotOfTypeNote(){
        return this.books.filter(book => book.publisher != 'Apunts');
    }
    
    booksNotSold(){
        return this.books.filter(book => book.soldDate === '');
    }

    toString(){
        return `Existen en catalogo ${this.books.length} libro.`;
    }
}