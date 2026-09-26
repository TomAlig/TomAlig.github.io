//Este archivo no cumple un proposito aun dentro del sistema.
//Ya que la pagina principal y la de mensajes funcionan con componentes headerfooter completamente distintos.
//Este archivo template lo dejo para usos futuros.

import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

//Este export funciona igual que un export finalizando el file, al solo ser UNA funcion.
//Se le puede poner un className para css al div.
export default function MainLayout() {
    return (
        <div>
        {/*Aqui va lo repetido, con el outlet tomando la forma de las cosas particulares.*/}
        {/*<Header />*/}
        
        <main>
        {/*En el outlet va a ir el file de la pagina que se quiera introducir, los contenidos por pagina.*/}
        <Outlet />
        </main>
        {/*<Footer />*/}
        </div>
    )
}