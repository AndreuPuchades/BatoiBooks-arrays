const server = import.meta.env.VITE_URL_API;

export default class BooksRepository{
    async getAllBooks() {
        const response = await fetch(server + '/books');
        if (!response.ok) {
          throw `Error ${response.status} de la BBDD: ${response.statusText}`;
        }
        const myData = await response.json();
        return myData;
    }

    async getBookById(idBook) {
        const response = await fetch(server + '/books/' + idBook);
        if (!response.ok) {
          throw `Error ${response.status} de la BBDD: ${response.statusText}`;
        }
        const myData = await response.json();
        return myData;
    }

    async addBook(book) {
        const response = await fetch(server + '/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book)
          });
          return response.json();
    }

    async removeBook(idBook) {
        const response = await fetch(server + '/books/' + idBook, {method: "DELETE"});
        if (!response.ok) {
          throw `Error ${response.status} de la BBDD: ${response.statusText}`;
        }
        const myData = await response.json();
        return myData;
    }

    async changeBook(book) {
        const response = await fetch(server + '/books/' + book.id, {
            method: 'PUT',
            body: JSON.stringify(book),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (!response.ok) {
            throw `Error ${response.status} de la BBDD: ${response.statusText}`
        }
        const data = await response.json()
        return data
    }
    
  async updatePriceOfBook(idBook, newPrice) {
    const dataNew = {"price" : newPrice};
    const response = await fetch(server + `/books/${idBook}`, {
      method: 'PATCH',
      body: JSON.stringify(dataNew),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const data = await response.json();
    return data.price = newPrice;
  }
}