const server = import.meta.env.VITE_URL_API;

export default class BooksRepository{
    async getAlBooks() {
        const response = await fetch(server + '/books/');
        if (!response.ok) {
          throw `Error ${response.status} de la BBDD: ${response.statusText}`
        }
        const myData = await response.json();
        return myData;
    }

    async getBookById(idBook) {
        const response = await fetch(server + '/books?id=' + idBook);
        if (!response.ok) {
          throw `Error ${response.status} de la BBDD: ${response.statusText}`
        }
        const myData = await response.json();
        return myData;
    }

    async addBook(book) {
        const response = await fetch(server + '/books/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book)
          });
          return response.json();
    }

    async removeBook(idBook) {
        const response = await fetch(server + '/books?id=' + idBook, {method: "DELETE"});
        if (!response.ok) {
          throw `Error ${response.status} de la BBDD: ${response.statusText}`
        }
        const myData = await response.json();
        return myData;
    }

    async changeBook(idBook, book) {
        const response = await fetch(server + '/books?id=' + idBook, {
            method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(book)
        });
        return response.json();
    }
}