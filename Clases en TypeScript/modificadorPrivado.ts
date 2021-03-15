class Animal{
  private nombre:string
  private tamano:number

  public constructor(nombre:string, tamano:number){
    this.nombre = nombre
    this.tamano = tamano
  }

  public moverse(): void {
    console.log("me estoy moviendo")
  }
}

const obj = new Animal("Serpiente", 2)

// El modificador private hace que los atributos o métodos declarados como private
// solo sean accesibles dentro de la misma clase donde están declarados

class Conectar{
  public url:string
}

const conn = new Conectar()
conn.url