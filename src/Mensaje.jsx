import { useState } from 'react'

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
<form id="formulario-contacto" class="w-full max-w-md space-y-4">

    <label for="correo">Correo:</label>
    <div>
    <input
    type="email"
    id="correo"
    name="Correo"
    class="w-full p-2 rounded border border-gray-600 bg-gray-800"
    ></input>
    </div>

    <label for="mensaje" class="block mb-2">Mensaje:</label>
    <textarea
    id="mensaje"
    name="Mensaje"
    rows="5"
    class="w-full p-2 rounded border border-gray-600 bg-gray-800"
    ></textarea> 

    <button class="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded" type="submit">Enviar</button>
</form>
</section>
</main>
<footer class="mb-8 mt-8 pl-4">
    <h2> <u> Otros medios de contacto </u> </h2>
    <p> Correo Institucional: <a href="mailto:Ejemplo@duocuc.cl"> Ejemplo@duocuc.cl </a> </p>
    <p> Github: <u> <a href="https://github.com/TomAlig" class="text-blue-500"> TomAlig </a> </u> </p>
</footer>
</div>
        )
}
