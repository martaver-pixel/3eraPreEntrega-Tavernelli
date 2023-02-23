class Habitacion {
  constructor(id, ocupada) {
    this.id = id;
    this.ocupada = ocupada;
  }

  ocupar() {
    this.ocupada = true;
  }
}

export default Habitacion;
