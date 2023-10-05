'use strict'

import Books from '../src/model/Books.class';
import Users from '../src/model/Users.class';
import Modules from '../src/model/Modules.class';
import {books, users, modules} from '.datos.js';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://batoi.org" target="_blank">
      <img src="/public/logoBatoi.png" class="logo" alt="Vite logo" />
    </a>
    <h1>BatoiBooks</h1>
  </div>
`

modulos = new Modules().populateData(modules);
usuarios = new Users().populateData(users);
libros = new Books().populateData(books);

librosBuenEstado = libros.booksWithStatus('good');
librosBuenEstado = librosBuenEstado.incrementPriceOfbooks(librosBuenEstado, 10);
console.log(librosBuenEstado);