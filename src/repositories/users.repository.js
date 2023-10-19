const server = import.meta.env.VITE_URL_API;

export default class UsersRepository{
    async getAllUsers() {
        const response = await fetch(server + '/users');
        if (!response.ok) {
          throw `Error ${response.status} de la BBDD: ${response.statusText}`;
        }
        const myData = await response.json();
        return myData;
    }

    async getUserById(idUser) {
        const response = await fetch(server + '/users/' + idUser);
        if (!response.ok) {
          throw `Error ${response.status} de la BBDD: ${response.statusText}`;
        }
        const myData = await response.json();
        return myData;
    }

    async addUser(user) {
        const response = await fetch(server + '/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
          });
          return response.json();
    }

    async removeUser(idUser) {
        const response = await fetch(server + '/users/' + idUser, {method: "DELETE"});
        if (!response.ok) {
          throw `Error ${response.status} de la BBDD: ${response.statusText}`;
        }
        const myData = await response.json();
        return myData;
    }

    async changeUser(user) {
      const response = await fetch(server + `/users/${user.id}`, {method: 'PUT', body: JSON.stringify(user), headers: {'Content-Type': 'application/json'}});
      if (!response.ok) {
        throw `Error ${response.status} de la BBDD: ${response.statusText}`;
      }
      const data = await response.json();
      return data;
    }

    async updateUserPassword(idUser, newPassword){
      const response = await fetch(server + '/users/' + idUser, {
        method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({password : newPassword})
    });
    return response.json();
    }
}