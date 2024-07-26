import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call the parent class constructor
    this._range = range; // Initialize the new attribute
  }

  cloneCar() {
    // Return a new instance of Car with the same attributes
    return new Car(this._brand, this._motor, this._color);
  }
}

export default EVCar;
