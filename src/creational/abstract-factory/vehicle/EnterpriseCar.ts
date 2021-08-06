import { Vehicle } from "../customer/customer"
import { Customer } from "./vehicle"

export class EnterpiseCar implements Vehicle {
  constructor (public name : string ,public readonly customer : Customer){

  }
  pickUp(): void {
    console.log(`${this.name} está buscando ${this.customer.name}`)
  }
}