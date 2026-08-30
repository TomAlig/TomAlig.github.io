const themeToggle = document.getElementById("theme-toggle"); //Toma el id del trigger que es el boton de la luna.
const moonIcon = document.getElementById("moon-icon"); //Toma los elementos del html por id para utilizarlos en la funcion del toggle.
const sunIcon = document.getElementById("sun-icon"); 

if (window.matchMedia("(prefers-color-scheme: dark)").matches) { //Este if indica que si la preferencia del usuario para el navegador es modo oscuro, invierta la manera de presentacion inciial. (icono sol, modo oscuro)
    document.documentElement.classList.add("dark");
    moonIcon.classList.add("hidden");
    sunIcon.classList.remove("hidden");
}

themeToggle.addEventListener("click", function () { //Funcion que activa el Darkmode
    document.documentElement.classList.toggle("dark"); 

    moonIcon.classList.toggle("hidden"); //Como se empieza en lightmode con la luna, el toggle invierte el estado en hidden, mostrando el sol en darkmode.
    sunIcon.classList.toggle("hidden");
});