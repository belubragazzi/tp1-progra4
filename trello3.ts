namespace ej3 {
    // Definir el tipo de las tareas
type Tarea = {
    nombre: string,
    estado: "en progreso" | "terminadas" | "pendientes",
    prioridad: 1 | 2 | 3,
    asignadoA: string
};

// Crear un array de tareas
const tareas: Tarea[] = [
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
function obtenerTareasDePersona(persona: string): Tarea[] {
    return tareas.filter(nombrePersona => nombrePersona.asignadoA === persona);
}

// Ejemplo de cómo usar la función para obtener las tareas de una persona
const tareasDeJuan = obtenerTareasDePersona("Juan");
console.log("Tareas de Juan:", tareasDeJuan);

}

