class Padre {
  nombre: string
  edad:number

  constructor(nombre:string, edad:number) {
    this.nombre = nombre
    this.edad = edad
  }

  mostrarNombre():void {
    console.log(this.nombre)
  }
}

class Hijo extends Padre {
  apellido:string

  constructor(nombre:string, edad:number, apellido:string) {
    // Super va a la clase padre, a su constructor y recibe los parametros
    super(nombre, edad)
    this.apellido = apellido
  }

  mostrarNombreHijo():void {
    console.log(this.nombre)
  }
}

const hijo = new Hijo('Alan', 22, 'brito')
hijo.mostrarNombre()
hijo.mostrarNombreHijo()
console.log(hijo.edad)

