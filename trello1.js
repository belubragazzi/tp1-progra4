"use strict";
// Base de "datos" de tareas
const tareas = [
    {
        nombre: "Tarea1",
        estado: false,
        prioridad: 1
    },
    {
        nombre: "Tarea2",
        estado: true,
        prioridad: 2
    },
    {
        nombre: "Tarea3",
        estado: false,
        prioridad: 3
    },
    {
        nombre: "Tarea4",
        estado: true,
        prioridad: 1
    },
    {
        nombre: "Tarea5",
        estado: false,
        prioridad: 2
    },
    {
        nombre: "Tarea6",
        estado: true,
        prioridad: 3
    },
    {
        nombre: "Tarea7",
        estado: false,
        prioridad: 2
    },
    {
        nombre: "Tarea8",
        estado: false,
        prioridad: 3
    }, {
        nombre: "Tarea9",
        estado: false,
        prioridad: 2
    },
];
const tareasPendientes = tareas.filter(tarea => !tarea.estado);
const tareasPendientesOrdenadas = tareasPendientes.sort((a, b) => a.prioridad - b.prioridad);
console.log(tareasPendientesOrdenadas);
