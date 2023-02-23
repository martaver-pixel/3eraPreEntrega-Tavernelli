class App {
  constructor(hoteles) {
    this.hoteles = hoteles;
    this.selectedHotel = null;
  }

  getHoteles() {
    return this.hoteles;
  }

  findHotelByName(hotelName) {
    return this.hoteles.find(
      (hotel) => hotel.nombre.toLowerCase() === hotelName.toLowerCase()
    );
  }

  selectHotel(hotel) {
    this.selectedHotel = hotel;
  }

  calculadorDePrecioFinal(noches, huespedes) {
    return noches * huespedes * this.selectedHotel.precioNoche;
  }

  reservaDeHabitaciones() {
    const habitacionLibre = this.selectedHotel.habitaciones.find(
      (habitacion) => habitacion.ocupada === false
    );
    habitacionLibre.ocupar();
  }
}

export default App;
