"use strict";
// Base de "datos" de tareas
const tareas = [
    {
        nombre: "Tarea1",
        estado: "pendientes",
        prioridad: 1
    },
    {
        nombre: "Tarea2",
        estado: "en progreso",
        prioridad: 2
    },
    {
        nombre: "Tarea3",
        estado: "pendientes",
        prioridad: 3
    },
    {
        nombre: "Tarea4",
        estado: "terminadas",
        prioridad: 1
    },
    {
        nombre: "Tarea5",
        estado: "pendientes",
        prioridad: 2
    },
    {
        nombre: "Tarea6",
        estado: "en progreso",
        prioridad: 3
    },
    {
        nombre: "Tarea7",
        estado: "pendientes",
        prioridad: 2
    },
    {
        nombre: "Tarea8",
        estado: "pendientes",
        prioridad: 3
    }, {
        nombre: "Tarea9",
        estado: "pendientes",
        prioridad: 2
    },
];
const tareasPendientes = tareas.filter(tarea => tarea.estado === "pendientes");
const tareasPendientesOrdenadas = tareasPendientes.sort((a, b) => a.prioridad - b.prioridad);
console.log(tareasPendientesOrdenadas);
