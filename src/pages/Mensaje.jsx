import HeaderMensaje from '../components/layout/HeaderMensaje'
import Formulario from '../components/layout/Formulario'
import FooterMensaje from '../components/layout/FooterMensaje'
export default function Mensaje({ alVolver }) { //Se exporta la funcion para que App la reconozca.
    //Clickear Volver devuelve a "inicio", como se definio en el if de "App"
  return (
       <div class="bg-black text-white min-h-screen flex flex-col justify-between">
            <HeaderMensaje alVolver={alVolver}/>
            <main class="bg-gray-900 text-white aspect-square:1/4 flex flex-grow items-center justify-center"> 
                <section class="pl-4">
                <Formulario/>
                </section>
            </main>
            <FooterMensaje/>
        </div>
    )
}
