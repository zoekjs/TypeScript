// Los parametros opcionales son parametros que por implementación pueden o no estar presentes
// Para declarar parametros opcionales debemos agregar un signo de interrogación después de la variable y antes de su tipo
const opcionales = (nombre:string, apellido:string, edad?:number) => {
  if (edad) {
    console.log(`se llama ${nombre}, su apellido es ${apellido} y su edad es ${edad}`)
  } else {
    console.log(`se llama ${nombre}, su apellido es ${apellido}`)
  }
}

opcionales("Felipe", "Espinoza")
opcionales("Alan", "Brito", 20)