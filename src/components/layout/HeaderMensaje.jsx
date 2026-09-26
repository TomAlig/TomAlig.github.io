function HeaderMensaje({ alVolver }) {
return (
<header> 
        <h1 class="pl-4"> Prototipo / Prueba CV de Tomás Aliaga - Mensaje </h1>
    <nav class="bg-gray-800 text-blue-500 flex gap-6 pl-4">
        <button onClick={alVolver} className="text-blue-500 cursor-pointer"> Volver </button> 

    </nav>
</header>
    )
}

export default HeaderMensaje;