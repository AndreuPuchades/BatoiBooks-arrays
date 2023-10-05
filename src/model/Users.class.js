import User from "./User.class";

export default class Users {
  constructor() {
    this.data = [];
  }

  populateData(arrayUsers) {
    arrayUsers.forEach((user) => {
      this.data.push(new User(user.id, user.email, user.nick));
    });
  }

  addItem(user) {
    user.id = this.getNewId();
    this.data.push(new User(user.id, user.email, user.nick));
    return new User(user.id, user.email, user.nick);
  }

  removeItem(id) {
    indice = this.getUserIndexById(id);
    if (indice === -1) {
      throw new Error("No existe esta id");
    }
    this.data.splice(indice, 1);
    return {};
  }

  toString() {
    text = `Usuarios (total ${this.data.length})`;
    for(i = 0; i < data.length; i++){
        text += ` - ${data[i].nick} (${data[i].id}) - ${data[i].email}`;
    }
  }

  getItemById(idUser) {
    user = this.data.find((user) => user.id == idUser);
    if(user == undefined){
        return {};
    }
    return user;
  }

  getUserIndexById(idUser) {
    if (!isArrayAndContainsInfo(this.data)) {
      return [];
    }

    if (!isValidId(idUser)) {
      return [];
    }
    return this.data.findIndex((user) => user.id === idUser);
  }

  getUserByNickName(nickname) {
    if (!isArrayAndContainsInfo(this.data)) {
      return {};
    }
    return checkIsUndefined(this.data.find((user) => user.nick === nickname));
  }

  getNewId() {
    if (!this.data.length) {
      return 1;
    }
    if (this.data.length == 1) {
      return 2;
    }
    return (
      this.data.reduce((userBefore, userAfter) =>
        Math.max(userBefore.id, userAfter.id)
      ) + 1
    );
  }
}

function isArrayAndContainsInfo(array) {
  return Array.isArray(array) && array.length;
}

function isValidId(idUser) {
  return isNumber(idUser) && isPositive(idUser);
}

function isNumber(number) {
  return !Number.isNaN(number);
}

function isPositive(number) {
  return number >= 0;
}

function checkIsUndefined(data) {
  if (!data) {
    data = {};
  }
  return data;
}