"use strict";
var ej4;
(function (ej4) {
    const tareas = [
        {
            nombre: "Tarea1",
            estado: "pendientes",
            prioridad: 1,
            personaAsignada: "Juan"
        },
        {
            nombre: "Tarea2",
            estado: "en progreso",
            prioridad: 2,
            personaAsignada: "María"
        },
        {
            nombre: "Tarea3",
            estado: "pendientes",
            prioridad: 3,
            personaAsignada: "Juan"
        }
    ];
    function esNombrePersonaValido(texto) {
        // Expresión regular para validar solo letras y espacios
        const regex = /^[A-Za-z\s]+$/;
        // Verificar si el texto coincide con la expresión regular
        return regex.test(texto);
    }
    // Ejemplo de uso
    const nombre1 = "John"; // válido
    const nombre2 = "John Smith"; // válido
    const nombre3 = "John123"; // inválido
    const nombre4 = "John Smith123"; // inválido
    console.log(esNombrePersonaValido(nombre1)); // true
    console.log(esNombrePersonaValido(nombre2)); // true
    console.log(esNombrePersonaValido(nombre3)); // false
    console.log(esNombrePersonaValido(nombre4)); // false
})(ej4 || (ej4 = {}));
