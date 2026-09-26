import { Link } from 'react-router-dom'
function Footer() {
    return (
        <footer id="contacto" className="mb-8 mt-8 pl-4">

            <h2> <u> Contacto </u> </h2>
            <p> Correo Institucional: <a href="mailto:Ejemplo@duocuc.cl"> Ejemplo@duocuc.cl </a> </p>
            <p> Github: <u> <a href="https://github.com/TomAlig" className="text-blue-500"> TomAlig </a> </u> </p>
            <p> Para mensajes directos atraves de este portal, ingrese <Link to="/mensaje" className="text-blue-500 underline cursor-pointer"> aquí </Link> </p>
        </footer>
    )
}

export default Footer;