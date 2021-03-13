// Para asignar parametros por defecto basta con asignarle un valor al parametro en la firma del método
// En este caso la edad por defecto será 27 a menos que se le pase un valor, en ese caso la edad se sobreescribe
const mostrar = (nombre:string, apellido:string, edad:number = 27) => {
  console.log(`se llama ${nombre}, su apellido es ${apellido} y su edad es ${edad}`)
}

mostrar('Alan', 'Brito', 25)
mostrar('Armando', 'Casas')