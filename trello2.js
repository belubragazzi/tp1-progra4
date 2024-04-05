"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var ej2;
(function (ej2) {
    /*  2. Consulta a la API (1 punto)
    
    Los inversores se quejan que las tareas tardan mucho en cargarse.
    Necesitamos adaptar el código anterior para que la carga se muestre de forma asíncrona.
    Asumí que existe una función que devuelve el listado de tareas después de 3 segundos.
    Podés usar el ejemplo que hicimos en clase.
     */
    function ordenarTareasAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            const tareasPendientes = tareas.filter(tarea => tarea.estado === "pendientes");
            const tareasPendientesOrdenadas = yield ordenarTareasPendientes(tareasPendientes);
            console.log(tareasPendientesOrdenadas);
        });
    }
    function ordenarTareasPendientes(tareasPendientes) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    ordenarTareasAsync();
})(ej2 || (ej2 = {}));
