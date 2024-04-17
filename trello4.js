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
            personaAsignada: "Marta Bolsa"
        },
        {
            nombre: "Tarea3",
            estado: "pendientes",
            prioridad: 3,
            personaAsignada: "Juan par2r"
        },
        {
            nombre: "Tarea4",
            estado: "pendientes",
            prioridad: 3,
            personaAsignada: "Juan Patricio Estrella"
        }
    ];
    //espera un string y devuelve un boolean
    function esNombrePersonaValido(texto) {
        // Expresión regular para validar solo letras y espacios
        const regex = /^[A-Za-z]+\s?[A-Za-z]*$/;
        // Verificar si el texto coincide con la expresión regular
        return regex.test(texto.trim()); //posibles espacios extra
        //si texto coincide con regex devuelvo true .test siempre devuelve boolean
    }
    // Ejemplo de uso
    console.log(esNombrePersonaValido(tareas[0].personaAsignada)); // true
    console.log(esNombrePersonaValido(tareas[1].personaAsignada)); // true
    console.log(esNombrePersonaValido(tareas[2].personaAsignada)); // false
    console.log(esNombrePersonaValido(tareas[3].personaAsignada)); // false
})(ej4 || (ej4 = {}));
