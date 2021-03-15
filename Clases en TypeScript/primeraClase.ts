class Vehiculo {
  marca:string
  fecha:string
  puertas:number
  
  // cada vez que se instancia una clase se llama al método constructor para inicializar todos sus atributos
  constructor (marca:string, fecha:string, puertas:number) {
    this.marca = marca
    this.puertas = puertas
    this.fecha = fecha
  }

  acelerar ():void {
    console.log('Acelerando...')
  }

  frenar ():void {
    console.log('Frenando...')
  }

}

const auto = new Vehiculo('Ford', '12/08/2020', 3)
auto.acelerar()
setTimeout(
  () => auto.frenar(),
  3000
)
