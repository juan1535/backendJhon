export const productoController = async () => {

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

            // Activar modo edición
            editando = true;
            productoEditado = Producto;

            // Cargar datos en el formulario
            document.getElementById('nombre').value = Producto.nombre;
            document.getElementById('descripcion').value = Producto.descripcion;
            document.getElementById('precio').value = Producto.precio;
            document.getElementById('categoria_id').value = Producto.categoria_id;

            // Cambiar texto del botón
            const btnSubmit = document.querySelector('form button[type="submit"]');
            btnSubmit.textContent = 'Actualizar';

        });

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.classList.add('btn', 'btn-danger', 'btn-sm');
        btnEliminar.addEventListener('click', async () => {
            const confirmacion = confirm('¿Estás seguro de que deseas eliminar este producto?');
            if (confirmacion) {
                await fetch(`http://localhost:3000/api/productos/${Producto.id}`, { method: 'DELETE' });
                alert('Producto eliminado exitosamente');
                location.reload();
            }
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
    
    form.addEventListener('submit', async (e) => {

        e.preventDefault();

        const producto = {

            nombre: document.getElementById('nombre').value,
            descripcion: document.getElementById('descripcion').value,
            precio: parseFloat(document.getElementById('precio').value),
            categoria_id: parseInt(document.getElementById('categoria_id').value),
        };

        if (editando) {
            // Actualizar producto
            await fetch(`http://localhost:3000/api/productos/${productoEditado.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(producto),
            });

            alert('Producto actualizado exitosamente');

        } else {
            // Crear producto
            await fetch('http://localhost:3000/api/productos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(producto),
            });
            
            alert('Producto creado exitosamente');
        }

        // Resetear formulario y estado
        form.reset();
        editando = false;
        productoEditado = null;
        document.querySelector('form button[type="submit"]').textContent = 'Guardar';

        location.reload(); // Recargar la página para actualizar la tabla
    });
}