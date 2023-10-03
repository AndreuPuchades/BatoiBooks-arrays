'use strict'

import functions from "./functions"
import {books, users, modules} from './datos';

console.log(functions.booksFromUser(books, 4));
console.log(functions.booksFromModule(books, '5021'));
console.log(functions.booksCheeperThan(books, '5025'));
console.log(functions.booksWithStatus(books, ));
console.log(functions.averagePriceOfBooks(books, 1));
console.log(functions.booksOfTypeNote(books, 1));
console.log(functions.booksNotOfTypeNote(books, 1));
console.log(functions.booksNotSold(books, 1));
console.log(functions.incrementPriceOfbooks(books, 10));
console.log(functions.getUserById(users, 1));
console.log(functions.getUserIndexById(users, 1));
console.log(functions.getModuleByCode(modules, ));
console.log(functions.getModuleIndexByCode(modules, ));