namespace ej2 {
    /*  2. Consulta a la API (1 punto)
    
    Los inversores se quejan que las tareas tardan mucho en cargarse. 
    Necesitamos adaptar el código anterior para que la carga se muestre de forma asíncrona.
    Asumí que existe una función que devuelve el listado de tareas después de 3 segundos. 
    Podés usar el ejemplo que hicimos en clase.
     */
    
    async function ordenarTareasAsync() {
        const tareasPendientes = tareas.filter(tarea => tarea.estado === "pendientes");
        const tareasPendientesOrdenadas = await ordenarTareasPendientes(tareasPendientes);
        console.log(tareasPendientesOrdenadas);
    }
    
    async function ordenarTareasPendientes(tareasPendientes: Tarea[]): Promise<Tarea[]> {
        return new Promise((resolve, reject) => {
            const tareasPendientesOrdenadas = tareasPendientes.sort((a, b) => {
                // Si las prioridades son diferentes, ordena por prioridad
                if (a.prioridad !== b.prioridad) {
                    return a.prioridad - b.prioridad;
                }
                // Si las prioridades son iguales, ordena por nombre
                return a.nombre.localeCompare(b.nombre);
            });
            resolve(tareasPendientesOrdenadas);
        });
    }
    
    ordenarTareasAsync();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }
    
    