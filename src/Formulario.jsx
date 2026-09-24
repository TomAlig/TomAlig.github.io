function Formulario() {
    return (
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
    )

}

export default Formulario;