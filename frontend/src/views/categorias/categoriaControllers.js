export const categoriaController = async () => {

    const response = await fetch("http://localhost:3000/api/categorias");
    const {data} = await response.json();
            
    // const tbody = document.getElementById('categorias-list');

    console.log(data);

    const crearFila = (categoria) => {

        const tbody = document.getElementById('categorias-list');
        console.log("Elemento tbody:", tbody);

        const tr = document.createElement('tr');

        const cellNombre = document.createElement('td');
        const cellDescripcion = document.createElement('td');
        const cellAcciones = document.createElement('td');

        cellNombre.textContent = categoria.nombre;
        cellDescripcion.textContent = categoria.descripcion;

        // Crear botones de editar y eliminar
        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.classList.add('btn', 'btn-primary', 'btn-sm', 'me-2');

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.classList.add('btn', 'btn-danger', 'btn-sm');

        // Agregar los botones a la celda de acciones
        cellAcciones.append(btnEditar, btnEliminar);

        // Agregar las celdas a la fila
        tr.append(cellNombre, cellDescripcion, cellAcciones);
        
        tbody.appendChild(tr);
    }

    // Función para cargar la tabla
    const cargarTabla = () => {
        data.forEach((categoria) => {
            crearFila(categoria); // Crear una fila para cada categoría
        });
    };

    cargarTabla();

    //tbody.appendChild(fragment);
            
    //return categorias
}

