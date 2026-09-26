import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './pages/App.jsx'
import Mensaje from './pages/Mensaje.jsx'

//Se crea el router con las paginas disponibles a navegar como argumentos y los paths que tendran.
const router = createBrowserRouter([
  //De quererse usar MainLayout para el mapeo inteligente de lo repetido se importaria al principio.
  /*
    se utilizaria la estrcutura de path element, pero el elemento siendo el layout de core, con el añadido de:
    children: [ y aqui irian los paths-elements como los ingrese en esta version.]
    */
  //El routerProvider toma lo que va arriba y actua igual
  {
    path: "/",
    element: <App />
  },
  {
    path: "/mensaje",
    element: <Mensaje />
  }
])

//El objeto App se reemplaza por el router para renderizar. (App dentro del router)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)
