// Funcion "normal" se declara la funcion y el tipo que retorna
function mostrar():void {
  console.log('Función 1')
}

// Arrow function, se declara la función y el tipo que retorna
const mostrar2 = (a:string):void => {console.log(a)}

mostrar()
mostrar2("Hola mundo")