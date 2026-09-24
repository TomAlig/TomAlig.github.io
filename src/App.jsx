import { useState, useEffect } from 'react'
import Mensaje from './Mensaje' // Para moverse al html de mensaje
import Header from './Header'
import Intro from './Intro'
import Lenguajes from './Lenguajes'
import Proyectos_Certificaciones from './Proyectos_Certificaciones'
import Footer from './Footer'
function App() {
  const [pagina, setPagina] = useState('inicio') //Define esta pagina como el inicio
  const [esOscuro, setEsOscuro] = useState(true) //Empieza en oscuro para el boton, pero es toggleable con el mismo.

  //Empieza visualmente la pagina en dark, es decir, con esos estilos.
  useEffect(() => {
  document.documentElement.classList.add("dark")
  }, [])

  //Esto es el toggle que cambia dark de true a false en el documento, y vuelve esOscuro a false para la apariencia del emoji
  const cambiarTema = () => {
    document.documentElement.classList.toggle("dark")
    setEsOscuro(!esOscuro) 
  }
  if (pagina === 'mensaje') {
    return <Mensaje alVolver={() => setPagina('inicio')} />
  }
  //Header, Intro, Lenguajes, Proyectos_Certificaciones y Footer son .JSX para el seccionamiento de la pagina.
  //Header utiliza como argumento variables definidas App por lo que hay que definir exactamente a que apuntar en su invocacion.
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between">
      <Header esOscuro={esOscuro} cambiarTema={cambiarTema} />
      <main className="bg-white text-black dark:bg-gray-900 dark:text-white saspect-square:1/4 flex-grow">
          <br/>
          <section className="pl-4">
            <Intro/>
            <Lenguajes/>
            <Proyectos_Certificaciones/>
          </section>
      </main>
      <Footer setPagina={setPagina}/>
    </div>
        )
}
        export default App
