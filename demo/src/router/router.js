import { cargarView } from "../helpers/loadView";
import { productoController } from "../views/productos/productoControllers.js";
import { categoriaController } from "../views/categorias/categoriaControllers.js";

const routes = {

    productos: {
        "template": "productos/index.html",
        controlador: productoController
    },
    categorias: {
        "template": "categorias/index.html",
        controlador: categoriaController
    }

};

export const router = async (app) => {

    const hash = location.hash.slice(1); //eliminar el # de la url
    const {template, controlador} = matchRoute(hash); //comprobar si la ruta existe
    //console.log(match);
    
    //llamando la vista
    cargarView(app, template); //cargar la vista por defecto al cargar la pagina
    //ejecutar el controlador
    //?

}

const matchRoute = (hash) => { 
    
    for (const route in routes) {
    
        //
        // console.log(route, "= ", hash);
        
        if (route === hash) {
            console.log("la ruta existe");
            return routes[route]; //retorna la ruta que coincide con el hash
        }
    }
    
}