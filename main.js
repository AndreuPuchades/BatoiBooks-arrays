import './style.css';
import Controller from './src/controller/controller.class';

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
  
<div id="form">
<form id="bookForm">
<div>            
            <label for="id-module">Módulo:</label>
            <select id="id-module">
              <option>- Selecciona un módulo -</option>
            </select><br>
          </div>
        
          <div id="editorial">
            <label for="publisher">Editorial:</label>
            <input type="text" id="publisher" class="publisher" required><br>
          </div>
        
          <div id="precio">
            <label for="price">Precio:</label>
            <input type="number" id="price"><br>
          </div>
        
          <div id="paginas">
            <label for="pages">Páginas:</label>
            <input type="number" id="pages"><br>
          </div>
        
          <div id="estado">
            <label id="status">Estado:&nbsp&nbsp</label>
            <!-- Aquí poned un radiobutton para cada estado -->
          </div>
        
          <div id="comentarios">
            <label for="comments">Comentario:</label>
            <input type="text" id="comments" class="comments" required><br>
          </div>
          <input type="hidden" id="id" value=""><br>

          <button type="submit">Añadir</button>
          <button type="reset">Reset</button>
</form>
</div>

  <div id="about">
    <h1>Acerca de la librería del saber</h1>

  <p>La librería del saber es una tienda online que ofrece una amplia selección de libros de todos los géneros, desde literatura clásica hasta novedades editoriales. Contamos con libros nuevos y usados, de autores nacionales e internacionales.</p>

  <h2>Misión</h2>

  <p>Nuestra misión es acercar la lectura a todos los públicos, proporcionando una amplia selección de libros a precios asequibles.</p>

  <h2>Visión</h2>

  <p>Queremos ser la librería online de referencia para los amantes de la lectura, ofreciendo una experiencia de compra agradable y eficiente.</p>

  <h2>Historia</h2>

  <p>La librería del saber fue fundada en 2023 por un grupo de profesionales con una larga trayectoria en el sector editorial. Desde entonces, hemos crecido hasta convertirnos en una de las librerías online más populares de España.</p>

  <h2>Valores</h2>

  <ul>
    <li>Calidad: Ofrecemos libros de alta calidad, tanto nuevos como usados.</li>
    <li>Precio: Nuestros precios son competitivos y asequibles para todos los bolsillos.</li>
    <li>Accesibilidad: Queremos que la lectura esté al alcance de todos, por eso ofrecemos una amplia selección de libros a precios asequibles.</li>
    <li>Servicio: Ofrecemos un servicio de atención al cliente amable y eficiente.</li>
  </ul>

  <h2>Contáctanos</h2>

  <p>Si tienes alguna pregunta o sugerencia, no dudes en contactarnos. Puedes hacerlo a través de nuestro formulario de contacto o enviándonos un correo electrónico a <a href="mailto:info@libreriadelsaber.com">info@libreriadelsaber.com</a>.</p>

  <h2>Redes sociales</h2>

  <ul>
    <li><a href="https://www.facebook.com/libreriadelsaber">Facebook</a></li>
    <li><a href="https://www.twitter.com/libreriadelsaber">Twitter</a></li>
    <li><a href="https://www.instagram.com/libreriadelsaber">Instagram</a></li>
    <li><a href="https://www.linkedin.com/company/libreriadelsaber">LinkedIn</a></li>
    <li><a href="https://www.pinterest.com/libreriadelsaber">Pinterest</a></li>
    <li><a href="https://www.youtube.com/channel/libreriadelsaber">YouTube</a></li>
  </ul>
  </div>
  
  <div id="message">
  </div>
  
<footer id ="about">
  Andreu Puchades Pascual
</footer>
`;

window.addEventListener("load", () =>{
  const myController = new Controller();
  myController.init();
})