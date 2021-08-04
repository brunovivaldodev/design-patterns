import { Bicycle } from "../vehicle/bicycle";
import { VehicleFactory } from "./vehicle-Factory";

export class BicycleFactory extends VehicleFactory {
  getVehicle(vehicleName: string) {
    return new Bicycle(vehicleName)
  }
}