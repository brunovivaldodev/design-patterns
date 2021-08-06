import { Vehicle } from "../customer/customer";
import { EnterpriseCustomer } from "../customer/enterprise-customer";
import { EnterpiseCar } from "../vehicle/EnterpriseCar";
import { Customer } from "../vehicle/vehicle";

export class EnterpriseCreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName)
  }

  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName)
    return new EnterpiseCar(vehicleName, customer)
  }
}