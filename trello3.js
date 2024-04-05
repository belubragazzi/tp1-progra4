"use strict";
var ej3;
(function (ej3) {
    // Crear un array de tareas
    const tareas = [
        {
            nombre: "Tarea1",
            estado: "pendientes",
            prioridad: 1,
            asignadoA: "Juan"
        },
        {
            nombre: "Tarea2",
            estado: "en progreso",
            prioridad: 2,
            asignadoA: "María"
        },
        {
            nombre: "Tarea3",
            estado: "pendientes",
            prioridad: 3,
            asignadoA: "Juan"
        }
    ];
    // Función para obtener las tareas de una persona
    function obtenerTareasDePersona(persona) {
        return tareas.filter(nombrePersona => nombrePersona.asignadoA === persona);
    }
    // Ejemplo de cómo usar la función para obtener las tareas de una persona
    const tareasDeJuan = obtenerTareasDePersona("Juan");
    console.log("Tareas de Juan:", tareasDeJuan);
})(ej3 || (ej3 = {}));
