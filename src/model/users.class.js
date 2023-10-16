import User from "./user.class";
import UsersRepository from "../repositories/users.repository";

export default class Users {
  constructor() {
    this.data = [];
  }
  
  async populateData() {
    const repositoryUser = new UsersRepository();
    const users = await repositoryUser.getAllUsers();
    this.data = users.map((item) => new User(
      item.id, 
      item.email, 
      item.nick, 
      item.password
    ))
  }

  async addItem(payload) {
    const repositoryUser = new UsersRepository();
    const user = await repositoryUser.addUser(payload);
    const newUser = new User(user.id, user.email, user.nick, user.password);
    this.data.push(newUser);
    return newUser;
  }

  async removeItem(id) {
    const repositoryUser = new UsersRepository();
    await repositoryUser.removeUser(id);
    const index = this.getUserIndexById(id);
    this.data.splice(index, 1);
    return {};
  }

  toString() {
    let usersToString = `Usuarios (total ${this.data.length})`
    this.data.forEach((item) => usersToString += `
    - ${item}`);
    return usersToString;
  }

  getUserById(id) {
    return this.data.find((item) => item.id === id) || {};
  }

  getUserIndexById(id) {
    return this.data.findIndex((item) => item.id === id);
  }

  getUserByNick(nick) {
    return this.data.find((item) => item.nick === nick) || {};
  }
}