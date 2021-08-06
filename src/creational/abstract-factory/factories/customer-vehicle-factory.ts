import { Vehicle } from "../customer/customer" 
import { Customer } from "../vehicle/vehicle" 

export interface CreateVehicleCustomer {
  createCustomer(customerName : string) : Customer
  createVehicle(vehicleName : string, customerName : string) : Vehicle
}