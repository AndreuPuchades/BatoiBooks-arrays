'use strict'

function booksFromUser(array, number){
    return array.filter(book => book.idUser == number);
}

function booksFromModule(array, string) {
    return array.filter(book => book.idModule == string);
}

function booksCheeperThan(array, number){
    return array.filter(book => book.price <= number);
}

function booksWithStatus(array, string){
    return array.filter(book => book.status == string);
}

function averagePriceOfBooks(array){
    if (!isArrayAndContainsInfo(array)) {
        return "0.00 €";
      }

    return (array.reduce((total, book) => total += book.price, 0) / array.lenght).toFixed(2) + ' €';
}

function booksOfTypeNote(array) {
    return array.filter(book => book.publisher == 'Apunts');
}

function booksNotOfTypeNote(array){
    return array.filter(book => book.publisher != 'Apunts');
}

function booksNotSold(array){
    return array.filter(book => book.soldDate === '');
}

function incrementPriceOfbooks(arrayBooks, percentajeToIncrement) {
    if (!isArrayAndContainsInfo(arrayBooks)) {
      return;
    }
  
    if (isNumber(percentajeToIncrement) && percentajeToIncrement >= 0 && percentajeToIncrement <= 100) {
      return;
    }

    return arrayBooks.map((book) => (book.price *= 1 + percentajeToIncrement));
  }

  function getUserById(arrayUsers, number) {
    if (!isArrayAndContainsInfo(arrayUsers)) {
      return [];
    }
  
    if (!isValidUser(number)) {
      return [];
    }
    return checkIsUndefined(arrayUsers.find((user) => user.id === number));
  }

  function getUserIndexById(arrayUsers, idUser) {
    if (!isArrayAndContainsInfo(arrayUsers)) {
      return [];
    }
  
    if (!isValidUser(idUser)) {
      return [];
    }
    return arrayUsers.findIndex((user) => user.id === idUser);
  }
  
  function getUserByNickName(arrayUsers, nickname) {
    if (!isArrayAndContainsInfo(arrayUsers)) {
      return new Object();
    }
    return checkIsUndefined(arrayUsers.find((user) => user.nick === nickname));
  }

function getModuleByCode(array, string){
    module = array.find(module => module.code == string);
    if(module == undefined){
        return [];
    } else {
        return module;
    }
}

function getModuleIndexByCode(array, string){
    return array.findIndex(module => module.code == string);
}

function isValidUser(idUser){
    return !Number.isNaN(idUser) && idUser >= 0;
}

function isArrayAndContainsInfo(array) {
    return Array.isArray(array) && array.length;
}

export default {
    booksFromUser,
    booksFromModule,
    booksCheeperThan,
    booksWithStatus,
    averagePriceOfBooks,
    booksOfTypeNote,
    booksNotOfTypeNote,
    booksNotSold,
    incrementPriceOfbooks,
    getUserById,
    getUserIndexById,
    getUserByNickName,
    getModuleByCode,
    getModuleIndexByCode
}