"use strict";
var ej3;
(function (ej3) {
    var tareasPorPersona = new Map();
    const agregarTarea = (mapa, tarea, persona) => {
        var tareas = mapa.get(persona);
        if (tareas === undefined)
            tareas = [];
        tareas.push(tarea);
        mapa.set(persona, tareas);
    };
    agregarTarea(tareasPorPersona, { nombre: "Tarea1", descripcion: "ordenar" }, "Juan");
    agregarTarea(tareasPorPersona, { nombre: "Tarea1", descripcion: "desordenar" }, "Pedro");
    agregarTarea(tareasPorPersona, { nombre: "Tarea2", descripcion: "armar" }, "Pedro");
    agregarTarea(tareasPorPersona, { nombre: "Tarea3", descripcion: "jugar" }, "Pedro");
    console.log(tareasPorPersona);
    const tareasPedro = tareasPorPersona.get("Pedro");
    console.log(tareasPedro);
})(ej3 || (ej3 = {}));
