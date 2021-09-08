import { ProductProtocol } from "./product-protocol";

export class TShirt implements ProductProtocol {
    private name = "Camiseta"
    private price = 49.90
    getName(): string {
        return this.name
    }

    getPrice(): number {
        return this.price
    }
}