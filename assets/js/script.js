function optenerDatoBoton(id) {
    // Obtener el valor del botón
    var boton = id.value;
    // Mostrar el valor en la consola
    return boton;
}

function ocultarBoton(id) {
    // Ocultar el botón
    $(id).parent().find("p").remove(); // Elimina el párrafo
    $(id).remove(); // Elimina el botón "Ver menos"
    $(".botonVer").toggle(); // Muestra el botón "Ver más" nuevamente
}