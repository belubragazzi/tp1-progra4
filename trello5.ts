namespace ej5 {
/*La forma de ordenar tareas por prioridad no está alcanzando para saber qué hacer a continuación. 
Ahora queremos que las tareas se muestren de nuevo como en el punto 1, donde las de Alta prioridad aparecen siempre primero. 
Pero las demás van a, además, tener una fecha límite (deadline) que marca que debe completarse antes de cierto día. 
Ordenarlas por la fecha límite que tenga cargada esa tarea.*/


// tipo de las tareas
type Tarea = {
    nombre: string,
    estado: boolean,
    prioridad: 1 | 2 | 3
    deadline: Date
};

// Base de "datos" de tareas
const tareas: Tarea[] = [
    { 
        nombre: "Tarea1",
        estado: false,
        prioridad: 1,
        deadline: new Date('2024-04-18')
    },
    { 
        nombre: "Tarea2",
        estado: false,
        prioridad: 2,
        deadline: new Date('2024-04-11')
    },
    { 
        nombre: "Tarea3",
        estado: false,
        prioridad: 3,
        deadline: new Date('2024-04-10')
    },
    { 
        nombre: "Tarea4",
        estado: false,
        prioridad: 1,
        deadline: new Date('2024-04-19')
    },
    { 
        nombre: "Tarea5",
        estado: false,
        prioridad: 2,
        deadline: new Date('2024-04-19')
    },
    { 
        nombre: "Tarea6",
        estado: false,
        prioridad: 3,
        deadline: new Date('2024-04-10')
    }
];


const tareasPendientes = tareas.filter(tarea => !tarea.estado);
const tareasPendientesOrdenadas = tareasPendientes.sort((a, b) => a.prioridad - b.prioridad);

const tareaMenorPrioridad = tareasPendientes.filter(tarea => tarea.prioridad != 1);


const fechaDeadline = tareaMenorPrioridad.sort((a, b) => a.deadline.getTime() - b.deadline.getTime());


//console.log(tareasPendientesOrdenadas)

console.log(fechaDeadline)











}