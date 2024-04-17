# el porqué de las cosas (de este tp ._.) 
## Ejercicio 1

### Parte a: mostrar tareas pendientes
Formulé con un type boolean el estado de la tarea: 
    true = terminada
    false = pendiente

Luego en un nuevo const agregue el .filter al objeto tareas (la "base de datos") para que solo muetre las tareas de estado false (o sea pendientes).

### Parte b: mostrar tareas pendientes ordenadas por prioridad
para diferenciar el orden de prioridad, en vez de los nombres "alta, media y baja" los diferencié de forma numerica "1, 2 y 3" siendo el 1 la priodidad más alta.

para poder ordenarlos use la funcion sort

## Ejercicio 2

Hice la misma funcion anterior pero:
    - para que se ejecute de forma asincronica, hice que primero filtre y ordene las tareas pendientes con un async await
    - generé una nueva promesa donde se muestre en la consola la funcion anterior,  con un setTimeOut para que se aparezca luego de 3 segundos 

## Ejercicio 3



## Ejercicio 4

hice un nuevo objeto que contenga tambien el nombre de la persona asignada

Creo una funcion que pide un texto tipo string, hice que con un regex valide si el nombre esta puesto correctamente

hago que devuelva un boolean

en los console log pruebo cada personaAsignada del objeto tarea

## Ejercicio 5

## Ejercicio 6