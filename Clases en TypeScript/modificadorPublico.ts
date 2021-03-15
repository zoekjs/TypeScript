class Animal{
  public nombre:string
  public tamano:number

  public constructor(nombre:string, tamano:number){
    this.nombre = nombre
    this.tamano = tamano
  }

  public moverse(): void {
    console.log("me estoy moviendo")
  }
}

const obj = new Animal("Serpiente", 2)

// Un atributo public es accesible por todas las clases
// un atributo o metodo es publico por defecto si no se le especifica lo contrario