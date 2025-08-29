//Declaración de variables
let boton = document.getElementById("btntexto");
let parrafo = document.getElementById("texto");

boton.addEventListener("click", function() {
    parrafo.innerHTML = "Para subir";
});

//Función para modificar el párrafo
boton.addEventListener("click", function() {
    parrafo.innerHTML = "Para bajar";
});