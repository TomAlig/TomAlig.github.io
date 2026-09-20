import { useState, useEffect } from 'react'
import Mensaje from './Mensaje' // Para moverse al html de mensaje
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
  return (
    <div class="bg-black text-white min-h-screen flex flex-col justify-between">
      <header>
        <h1 class="pl-4"> Prototipo / Prueba de CV de Tomás Aliaga - <strong> (Talig en Github)</strong>  </h1>
        <nav class="bg-gray-800 text-blue-500 flex gap-6 pl-4">
          <a href="index.html">CV</a>
          <a href="#contacto">Contacto</a>
          <button onClick={cambiarTema} type="button" className="cursor-pointer"> 
            {esOscuro ? <span>☀️</span> : <span>🌙</span> /*Esto es javascript que cuestiona si esOscuro es true, aqui se hace el toggle del grafico del emoji, si si sol, si no luna*/} 
          </button>
        </nav>
      </header>
      <main class="bg-white text-black dark:bg-gray-900 dark:text-white saspect-square:1/4 flex-grow">
        <br/>
          <section class="pl-4">
            <p class="border-2 border-black w-fit p-2 dark:border-white"> Mi nombre es Tomás Aliaga. Soy un estudiante de 21 años de la carrera Ingenieria en Informatica que tiene un conocimiento general de múltiples aristas en el área. <br/>
              Destaco en mi compromiso, mi buen desempeño y mi proactividad. <br />

              2026 - Actualidad: Estudiante de 2do año.
            </p>
            <br/>
            <h2> <u> Experiencia en lenguajes </u> </h2>
            <div class="space-y-2 mb-8">
              <p> Dentro de mis áreas de conocimiento en programación están los siguientes lenguajes: </p>

              <p> <strong>Python</strong>      - Intermedio </p>
              <p> <strong>SQL</strong>         - Intermedio </p>
              <p> <strong>Java</strong>        - Basico </p>
              <p> <strong>JavaScript</strong>  - Basico </p>
            </div>

            <div class="space-y-2 mb-8">
              <h3> <u>Proyectos desarrollados</u>  - (En mis estudios) </h3>

              <p> <strong> - CrossMatch - </strong> </p>
              <p> Fui uno de los desarrolladores en un proyecto evaluativo de diseño backend para un sistema de recomendación automatizado. <br />
                Dentro de mi desempeño se encuentra el manejo general de APIs simples en SpringBoot, La creación y mantenimiento de bases de datos <br />
                y la efectiva seguridad de los componentes operativos dentro del mismo.
              </p>
              <br/>
                <p> <strong> - Masterbikes - </strong> </p>
                <p> He realizado múltiples Mockups para páginas web, siendo el más predominante este trabajo semestral. <br />
                  El efectivo desarrollo de este proyecto me brindó habilidades para entender el flujo correcto y funcional del frontend, dándome un primer vistazo superficial en la estructura HTML.
                </p>
                <br/>
                  <h3> <strong> - Proyectos independientes - </strong> </h3>
                  <p> He desarrollado de forma extracurricular juegos básicos en los lenguajes python y otros motores de GameDev, <br/>
                    por lo que tengo un entendimiento técnico de juegos simples competente. </p>
            </div>
                <div class="space-y-2 mb-8">
                  <h2> <u> Certificaciones</u> </h2>
                  <p>Actualmente cuento con 2 certificaciones aprobadas:</p>
                  <p> <strong> Cybersecurity Foundation (CSFPC) </strong> </p>
                  <p> Adquirida en Octubre de 2025 - Certiprof </p>
                  <br />
                  <p> <strong> Python Essentials 1 </strong> </p>
                  <p> Adquirida en Julio de 2025 - Cisco </p>
                </div>
            </section>
          </main>
          <footer id="contacto" class="mb-8 mt-8 pl-4">

            <h2> <u> Contacto </u> </h2>
            <p> Correo Institucional: <a href="mailto:Ejemplo@duocuc.cl"> Ejemplo@duocuc.cl </a> </p>
            <p> Github: <u> <a href="https://github.com/TomAlig" class="text-blue-500"> TomAlig </a> </u> </p>
            <p> Para mensajes directos atraves de este portal, ingrese <button onClick={() => setPagina('mensaje')} className="text-blue-500 underline">aquí </button> </p>
          </footer>
        </div>
        )
}

        export default App
