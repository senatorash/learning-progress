// define the vehicle interface
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

//  Implement the car class that implements the vehicle interface
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}

const myRide = new Car("Toyota", "Corolla", 2020);

console.log(myRide.start());
