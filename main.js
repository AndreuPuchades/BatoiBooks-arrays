import './style.css';
import Controller from './src/controller/controller.class';

document.addEventListener('DOMContentLoaded', async () => {
  const myController = new Controller()
  await myController.init()
})

document.querySelector('#app').innerHTML = `
<header>
  <img src="/logoBatoi.png" class="logo"/>
  <h1>BatoiBooks</h1>
</header>
  
  <nav>
    <ul>
      <li><a href="#list">Ver Libros</a></li>
      <li><a href="#bookForm">Añadir Libro</a></li>
      <li><a href="#about">Acerca de...</a></li>
    </ul>
  </nav>

  <div id="list">

  </div>

  <div id="message">

  </div>

<button id="remove">Borrar libro</button>
<form id="bookForm">
  <div>
    <label for="id-module">Módulo:</label>
    <select id="id-module">
      <option>- Selecciona un módulo -</option>
    </select><br>
  </div>

  <div>
    <label for="publisher">Editorial:</label>
    <input type="text" id="publisher" required><br>
  </div>

  <div>
    <label for="price">Precio:</label>
    <input type="number" id="price"><br>
  </div>

  <div>
    <label for="pages">Páginas:</label>
    <input type="number" id="pages"><br>
  </div>

  <div>
    <label id="estado">Estado:&nbsp&nbsp</label>
    <!-- Aquí poned un radiobutton para cada estado -->
  </div>

  <div>
    <label for="comments">Comentarios:</label>
    <textarea id="comments"></textarea>
  </div>

  <button type="submit">Añadir</button>
  <button type="reset">Reset</button>
</form>
<footer id ="about">
  Andreu Puchades Pascual
</footer>
`;