import './style.css';
import Books from './src/model/books.class';

const books = new Books();

document.querySelector('#app').innerHTML = `
  <div>
    <img src="/logoBatoi.png" class="logo"/>
    <p>Abre la Consola</p>
  </div>
`;

init();

async function init() {
  await books.populateData();
  console.log(books.booksFromUser(4));
  console.log(books.booksFromModule("5021").booksWithStatus("good"));
  await books.booksFromModule("5025").incrementPriceOfbooks(0.1);
  console.log(books.booksFromModule("5025"));
}