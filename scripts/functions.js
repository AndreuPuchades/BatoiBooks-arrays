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

function incrementPriceOfbooks(array, number){
    return array.map(book => book.price + (book.price * (number / 10)));
}

function getUserById(array, number){
    user =  array.find(user => user.id == number);
    if(user == undefined){
        return {};
    } else {
        return user;
    }
}

function getUserIndexById(array, number){
    user = array.findIndex(user => user.id === number);
    if(user == -1){
        return {};
    } else {
        return user;
    }
}

function getUserByNickName(array, string){
    user = array.find(user => user.nick == string);
    if(user == undefined){
        return {};
    } else {
        return module;
    }
}

function getModuleByCode(array, string){
    module = array.find(module => module.code == string);
    if(module == undefined){
        return {};
    } else {
        return module;
    }
}

function getModuleIndexByCode(array, string){
    return array.findIndex(module => module.code == string);
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