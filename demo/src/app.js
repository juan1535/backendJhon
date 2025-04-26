import "./css/main.css";
import { router } from "./router/router";


const app = document.querySelector('#app');

//---------------------------------------------------------- #1 Creación del header(encabezado) y elementos
const header = document.querySelector('#header');
header.classList.add('encabezado');

//.......... #1.1 Creación de los elemtos del header: categorias y productos

const itemsHeader_content = document.createElement('div');
itemsHeader_content.classList.add('items-content')

const linkCategorias = document.createElement('a');
linkCategorias.classList.add('item-link')
linkCategorias.textContent = 'Categorias';
linkCategorias.setAttribute('href', '#categorias');

const linkProductos = document.createElement('a');
linkProductos.classList.add('item-link')
linkProductos.textContent = 'Productos';
linkProductos.setAttribute('href', '#productos');

itemsHeader_content.append(linkCategorias, linkProductos);

header.append(itemsHeader_content);

//app.appendChild(header);


//cargarView(app); //cargar la vista por defecto al cargar la pagina


// window.addEventListener('hashchange', () => {

//     console.log('se modifico la ruta');
// });

window.addEventListener('hashchange', () => {

    router(app);
});