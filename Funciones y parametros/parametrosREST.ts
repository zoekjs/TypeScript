// Se ocupan cuando la cantidad de parametros es muy grande
// Crea un array de objetos, los recorre y los muestra
const cartaPostres = (postre:string, ...frutas:string[]):void => {
  console.log(`El postre es ${postre} y tiene ${frutas}`)
}

cartaPostres('Postre1', 'naranja', 'platano')