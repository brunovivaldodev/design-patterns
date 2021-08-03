import { MainDishBuilder } from "./classes/main-dish-builder";
import { Beans, Meat, Rice } from "./classes/meals";
import { MealBox } from "./classes/meals-box";




const mainDishBuilder = new MainDishBuilder();

mainDishBuilder.makeMeal().makeDessert()


console.log(mainDishBuilder.getMeal())