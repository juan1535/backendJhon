import { cargarView } from "../helpers/loadView";
import { productoController } from "../views/productos/productoControllers.js";
import { categoriaController } from "../views/categorias/categoriaControllers.js";
import { homeController } from "../views/inicio/homeControllers.js";

const routes = {

    // home: {
    //     "template": "home/index.html",
    //     controlador: () => {
    //         console.log("controlador home");
    //     }
    // },
    
    home: {
        "template": "inicio/index.html",
        controlador: homeController
    },
    productos: {
        "template": "productos/index.html",
        controlador: productoController
    },
    categorias: {
        "template": "categorias/index.html",
        controlador: categoriaController
    },

};

export const router = async (app) => {

    const hash = location.hash.slice(1); //eliminar el # de la url
    const {template, controlador} = matchRoute(hash); //comprobar si la ruta existe
    //console.log(match);
    //llamando la vista
    await cargarView(app, template); //cargar la vista por defecto al cargar la pagina
    //ejecutar el controlador
    //?

    // Ejecutar el controlador
    controlador(); // Ejecutar el controlador después de cargar la vista
}

const matchRoute = (hash) => { 
    
    
    for (const route in routes) {
    
        //
        // console.log(route, "= ", hash);
        //console.log(route);
        
        if (!hash) {
            //si no hay hash, se carga la vista por defecto
            return routes['home']; //retorna la ruta por defecto
            
        }

        if (route === hash) {
            console.log("la ruta existe");
            return routes[route]; //retorna la ruta que coincide con el hash
        }
    }
    
}
