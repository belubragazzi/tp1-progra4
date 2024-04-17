namespace ej2 {
    /*  2. Consulta a la API (1 punto)
    
    Los inversores se quejan que las tareas tardan mucho en cargarse. 
    Necesitamos adaptar el código anterior para que la carga *de prioridades / hay un gris* se muestre de forma asíncrona.
    Asumí que existe una función que devuelve el listado de tareas después de 3 segundos. 
    Podés usar el ejemplo que hicimos en clase.
     */

    // tipo de las tareas
type Tarea = {
  nombre: string,
  estado: boolean,
  prioridad: 1 | 2 | 3
};

// Base de "datos" de tareas
const tareas: Tarea[] = [
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
  },{ 
      nombre: "Tarea9",
      estado: false,
      prioridad: 2
  },
];
    
const mostrarTareasPendientesOrdenadas = async () => {
  const tareasPendientes = tareas.filter(tarea => !tarea.estado);
  const tareasPendientesOrdenadas = tareasPendientes.sort((a, b) => a.prioridad - b.prioridad);
  
   await new Promise(resolve => setTimeout(resolve, 3000)); // Espera 3 segundos
  
  console.log(tareasPendientesOrdenadas);
};
console.log(tareas) // la tarea que se ejecuta en el momento
mostrarTareasPendientesOrdenadas(); // tarea que se ejecuta despues de 3 segundos
   

    
    
    
    
    
    
    
    
    
    
    
    
    
    }
    
    