import { MealBuilderProtocol } from "../meal-builder-protocol";
import { Beans, Beverage, Dessert, Meat, Rice } from "./meals";
import { MealBox } from "./meals-box";

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  makeMeal(): this {
    const rice = new Rice("Arroz", 120)
    const beans = new Beans("Feijão", 125)
    const meat = new Meat("Carne", 200)

    this._meal.add(rice, beans, meat)

    return this
  }
  makeBeverage(): this {
    const bebida = new Beverage("Arroz", 150)

    this._meal.add(bebida)

    return this
  }
  makeDessert(): this {
    const sobremesa = new Dessert("Arroz", 250)

    this._meal.add(sobremesa)

    return this
  }
  reset(): this {
    this._meal = new MealBox();
    return this
  }
  getMeal(): MealBox {
    return this._meal
  }
}