export const productoController = async () => {

    await new Promise (requestAnimationFrame);

    const responseProductos = await fetch("http://localhost:3000/api/productos");
    const {data: productos} = await responseProductos.json();

    const responseCategorias = await fetch("http://localhost:3000/api/categorias");
    const { data: categorias } = await responseCategorias.json();

            
    // const tbody = document.getElementById('categorias-list');

    // console.log(data);

    const selectCategoria = document.getElementById('categoria_id');
    categorias.forEach((categoria)=>{

        const opcion = document.createElement('option');
        opcion.value = categoria.id;
        opcion.textContent = categoria.nombre;
        selectCategoria.appendChild(opcion);
    });

    /**
     * Función para crear una fila en la tabla de productos
     * @param {Object} Producto - Objeto que representa un producto
     */
    const crearFila = (Producto) => {

        const tbody = document.getElementById('productos-list');

        const tr = document.createElement('tr');

        const cellNombre = document.createElement('td');
        const cellDescripcion = document.createElement('td');
        const cellPrecio = document.createElement('td');
        const cellCategoria = document.createElement('td');
        const cellAcciones = document.createElement('td');

        cellNombre.textContent = Producto.nombre;
        cellDescripcion.textContent = Producto.descripcion;

        //cellPrecio.textContent = Producto.precio;

        cellPrecio.textContent = `$ ${parseFloat(Producto.precio).toFixed(2)}`; // hacer un parce float para que el precio se vea con dos decimales

        // buscar categoria por ID
        const categoria = categorias.find((categoria)=> categoria.id === Producto.categoria_id);
        cellCategoria.textContent = categoria ? categoria.nombre : 'Sin categoría';

        // Crear botones de editar y eliminar
        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.classList.add('btn', 'btn-primary', 'btn-sm', 'me-2');
        btnEditar.addEventListener('click', () => {

        });

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.classList.add('btn', 'btn-danger', 'btn-sm');
        btnEliminar.addEventListener('click', async () => {

        });

        // Agregar los botones a la celda de acciones
        cellAcciones.append(btnEditar, btnEliminar);

        // Agregar las celdas a la fila
        tr.append(cellNombre, cellDescripcion, cellPrecio ,cellCategoria, cellAcciones);
        
        tbody.appendChild(tr);
    }

    /**
     * Función para cargar la tabla de productos
     * @param {Array} productos - Array de objetos que representan productos
     */
    const cargarTabla = () => {
        productos.forEach((producto) => {
            crearFila(producto); // Crear una fila para cada categoría
        });
    };

    cargarTabla();

    /**
     * Función para guardar un nuevo producto
     * @param {*} e - Evento de envío del formulario
     */
    const guardar = (e) => {

        
    }

    form.addEventListener('submit', guardar)
}