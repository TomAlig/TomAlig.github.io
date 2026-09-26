
import { useState, useEffect } from 'react'
 // Para moverse al html de mensaje estaba el importe, ahora se utiliza Link del router atraves de Footer.
import Header from '../components/layout/Header'
import Intro from '../Intro'
import Lenguajes from '../components/layout/Lenguajes'
import Proyectos_Certificaciones from '../components/layout/Proyectos_Certificaciones'
import Footer from '../components/layout/Footer'
function App() {
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
      <Footer />
    </div>
        )
}
        export default App
