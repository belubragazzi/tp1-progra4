namespace ej3 {
 
    type Tarea = {
        nombre: string,
        descripcion: string
    };

    type Persona = string;
    
    var tareasPorPersona = new Map<Persona, Tarea[]>();


    const agregarTarea = (mapa: Map<Persona, Tarea[]>, tarea: Tarea, persona: Persona) => {
        var tareas = mapa.get(persona)
        if(tareas === undefined)
            tareas = [];
        tareas.push(tarea);
        mapa.set(persona, tareas)
    }
    
    agregarTarea(tareasPorPersona, {nombre: "Tarea1", descripcion: "ordenar"},"Juan");
    agregarTarea(tareasPorPersona, {nombre: "Tarea1", descripcion: "desordenar"},"Pedro");
    agregarTarea(tareasPorPersona, {nombre: "Tarea2", descripcion: "armar"},"Pedro");
    agregarTarea(tareasPorPersona, {nombre: "Tarea3", descripcion: "jugar"},"Pedro");
    
    console.log(tareasPorPersona)
    const tareasPedro = tareasPorPersona.get("Pedro")

    console.log(tareasPedro)

}

