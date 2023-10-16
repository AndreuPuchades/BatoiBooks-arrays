const server = import.meta.env.VITE_URL_API;

export default class UsersRepository{
    async getAllBooks() {
        const response = await fetch(server + '/users/');
        if (!response.ok) {
          throw `Error ${response.status} de la BBDD: ${response.statusText}`
        }
        const myData = await response.json();
        return myData;
    }

    async getBookById(idUser) {
        const response = await fetch(server + '/users/' + idUser);
        if (!response.ok) {
          throw `Error ${response.status} de la BBDD: ${response.statusText}`
        }
        const myData = await response.json();
        return myData;
    }

    async addBook(user) {
        const response = await fetch(server + '/users/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
          });
          return response.json();
    }

    async removeBook(idUser) {
        const response = await fetch(server + '/users/' + idUser, {method: "DELETE"});
        if (!response.ok) {
          throw `Error ${response.status} de la BBDD: ${response.statusText}`
        }
        const myData = await response.json();
        return myData;
    }

    async changeBook(idUser, user) {
        const response = await fetch(server + '/users/' + idUser, {
            method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(user)
        });
        return response.json();
    }
}