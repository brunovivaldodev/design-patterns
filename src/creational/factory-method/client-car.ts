import { CarFactory } from "./factories/car.Factory"


const carFactory = new CarFactory

const fusca = carFactory.getVehicle("Fusca")

fusca.pickUp("Joana")
fusca.stop()