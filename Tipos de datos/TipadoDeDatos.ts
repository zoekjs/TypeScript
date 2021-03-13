// Tipos de variables

// const edad = 28 // Valor fijo, no cambia, no se modifica

// Let para crear una variable modificable, const para constantes (no son modificables, excepto en arrays y objetos)
// En JS una variable puede ser un string y al modificarla asignarle un número, en typescript no

let nombre:string = 'Felipe'
const edad:number = 28

// para compilar un archivo de typeScript ocupamos tsc <nombreArchivo.ts>
// esto nos genera un archivo de javascript el cual podremos ejecutar en la terminal con node
// node <nombreArchivo.js>
// Cada vez que se realice un cambio en el archivo hay que volver a compilar


// compilar continuamente => tsc --w <nombreArchivo.ts>