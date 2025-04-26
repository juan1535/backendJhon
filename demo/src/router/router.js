import { cargarView } from "../helpers/loadView";
import { productoController } from "../views/productos/productoControllers.js";
import { categoriaController } from "../views/categorias/categoriaControllers.js";

const routes = {

    productos: {
        "template": "?",
        controlador: productoController
    },
    categorias: {
        "template": "?",
        controlador: categoriaController
    }

};

export const router = async (app) => {

    const hash = location.hash.slice(1); //eliminar el # de la url
    
    cargarView(app, hash); //cargar la vista por defecto al cargar la pagina

}

const matchRoute = () => { 
    
    for (const route in routes) {
    
        console.log(route, "= ", hash);
        
    }
    
}