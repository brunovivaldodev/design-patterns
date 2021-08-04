import { Car } from "../vehicle/car";
import { VehicleFactory } from "./vehicle-Factory";

export class CarFactory extends VehicleFactory {
  getVehicle(vehicleName: string) {
    return new Car(vehicleName)
  }
}