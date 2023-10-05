'use strict'

import Books from './model/books.class';
import Users from './model/users.class';
import Models from './model/Modules.class';
import {books, users, modules} from './datos';

modulos = new Models().populateData(modules);
usuarios = new Users().populateData(users);
libros = new Books().populateData(books);

librosBuenEstado = libros.booksWithStatus('good');
librosBuenEstado = librosBuenEstado.incrementPriceOfbooks(librosBuenEstado, 10);
console.log(librosBuenEstado);