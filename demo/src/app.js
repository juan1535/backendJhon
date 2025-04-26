import "./css/main.css";

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


const cargarView = async () => {

    // console.log(location);
    const hash = location.hash.slice(1); //eliminar el # de la url
    // console.log(hash);
    const response = await fetch(`./src/views/${hash}/index.html`);
    const html = await response.text();
    // console.log(html);

    app.innerHTML= html;

}


// window.addEventListener('hashchange', () => {

//     console.log('se modifico la ruta');
// });

window.addEventListener('hashchange', cargarView);