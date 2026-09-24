function Header({esOscuro, cambiarTema}) {
    return(
        <header>
           
            <h1 className="pl-4"> Prototipo / Prueba de CV de Tomás Aliaga - <strong> (Talig en Github)</strong>  </h1>
            <nav className="bg-gray-800 text-blue-500 flex gap-6 pl-4">
                <a href="index.html">CV</a>
                <a href="#contacto">Contacto</a>
                <button onClick={cambiarTema} type="button" className="cursor-pointer"> 
                {esOscuro ? <span>☀️</span> : <span>🌙</span> /*Esto es javascript que cuestiona si esOscuro es true, aqui se hace el toggle del grafico del emoji, si si sol, si no luna*/} 
                </button>
            </nav>
        </header>
    )
}
export default Header;