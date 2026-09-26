import { Link } from 'react-router-dom'
function HeaderMensaje() {
return (
<header> 
        <h1 class="pl-4"> Prototipo / Prueba CV de Tomás Aliaga - Mensaje </h1>
    <nav class="bg-gray-800 text-blue-500 flex gap-6 pl-4">
        <Link to="/" className="text-blue-500 cursor-pointer"> 
          Volver 
        </Link> 
    </nav>
</header>
    )
}

export default HeaderMensaje;