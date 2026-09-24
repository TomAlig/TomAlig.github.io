import Formulario from './Formulario'
import FooterMensaje from './FooterMensaje'
export default function Mensaje({ alVolver }) { //Se exporta la funcion para que App la reconozca.
    //Clickear Volver devuelve a "inicio", como se definio en el if de "App"
  return (
       <div class="bg-black text-white min-h-screen flex flex-col justify-between">
<header> 
        <h1 class="pl-4"> Prototipo CV de Tomás Aliaga - <strong> (Talig en Github)</strong>  </h1>
    <nav class="bg-gray-800 text-blue-500 flex gap-6 pl-4">
        <button onClick={alVolver} className="text-blue-500 cursor-pointer"> Volver </button> 

    </nav>
</header>
<main class="bg-gray-900 text-white aspect-square:1/4 flex flex-grow items-center justify-center"> 
<section class="pl-4">
<Formulario/>
</section>
</main>
<FooterMensaje/>
</div>
    )
}
