import { ProductDecorator } from "./product-decorator";
import { ProductStampDecorator } from "./product-stamp-decorator";
import { TShirt } from "./t-shirt";


const tShirt = new TShirt()
const stampedTShirt = new ProductStampDecorator(tShirt)
const stampedTShirtBackAndFront = new ProductStampDecorator(stampedTShirt)

console.log(tShirt.getPrice())
console.log(stampedTShirt.getPrice())
console.log(stampedTShirtBackAndFront.getPrice())


console.log(tShirt.getName())
console.log(stampedTShirt.getName())
console.log(stampedTShirtBackAndFront.getName())


