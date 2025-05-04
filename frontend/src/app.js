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

//.......... #1.2 Creación de logo con enlace a la pagina principal
const logo = document.createElement('a');
logo.classList.add('logo');
logo.setAttribute('href', '/#');

const logo_img = document.createElement('img');
logo_img.classList.add('logo-img');
logo_img.setAttribute('src', 'src/assets/logo.png');
logo_img.setAttribute('alt', 'logo de la tienda');

logo.appendChild(logo_img);

header.append(logo, itemsHeader_content);


//---------------------------------------------------------- #3 Listado de Categorias

// const cargar_tabla = async () => {

//     try {
//         const categoriasResponse = await categoriaController();
//         const categorias = categoriasResponse.data;

//         // Validar que `categorias` sea un arreglo
//         if (!Array.isArray(categorias)) {
//             console.error("La propiedad `data` no es un arreglo:", categorias);
//             return;
//         }

//         const tbody = document.querySelector('#categorias-list');
//         tbody.innerHTML = ''; // Limpia el contenido actual de la tabla

//         categorias.forEach((categoria) => {
//             crearFila(categoria); // Crea una fila para cada categoría
//         });
//     } catch (error) {
//         console.error("Error al cargar la tabla:", error);
//     }

//     // const categoriasResponse = await categoriaController();
//     // const categorias = categoriasResponse.data;

//     // const tbody = document.querySelector('#categorias-list');
//     // tbody.innerHTML = ''; // Limpia el contenido actual de la tabla

//     // categorias.forEach((categoria) => {
//     //     crearFila(categoria);
//     // });

// }

// const crearFila = ({id, nombre, descripcion}) => {
  
//     // Obtiene una referencia a la tabla
//     const tbody = tabla.querySelector('#categorias-list');
  
//     // Inserta una fila en la tabla
//     const tr = document.createElement('tr');

//     // // Celda nombre
//     // const cellNombre = tr.insertCell(0);
//     // const cellDescripcion = tr.insertCell(1);

//     //crear celdas

//     const cellNombre = document.createElement('td');
//     const cellDescripcion = document.createElement('td');
//     const cellAcciones = document.createElement('td');

//     // Creamos los elementos de texto para cada celda
//     cellNombre.textContent = nombre;
//     cellDescripcion.textContent = descripcion;
    
//     // Creamos los elementos de botones para editar y eliminar
//     const div = document.createElement('div');
//     const botonEditar = document.createElement('button');
//     const botonEliminar = document.createElement('button');

//     // Asignamos los textos a los botones
//     botonEditar.textContent = "Editar";
//     botonEliminar.textContent = "Eliminar";

//     botonEditar.setAttribute('data-id', id);
//     botonEliminar.setAttribute('data-id', id);
//     // Asignamos las clases a los botones y al div contenedor
//     //div.classList.add("botonera");
//     botonEditar.classList.add("btn", "btn--small", "editar");
//     botonEliminar.classList.add("btn", "btn--small", "btn--danger", "eliminar");

//     // Agregamos los botones al div contenedor
//     cellAcciones.appendChild(botonEditar,botonEliminar)

//     tr.append(cellNombre, cellDescripcion, cellAcciones);

//     tbody.appendChild(tr);
// }

window.addEventListener('hashchange', () => {

    router(app);
    // cargar_tabla();
});

window.addEventListener('DOMContentLoaded', () => {

    router(app);
    // cargar_tabla();
});