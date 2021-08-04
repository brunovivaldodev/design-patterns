interface Prototype {
  clone(): Prototype;
}

class Persons implements Prototype {
  constructor(public name: string, public age: number) { }
  clone(): this {
    const newPerson = Object.create(this)
    return newPerson
  }
}

const person1 = new Persons("Bruno",23)
const person2 = person1.clone()

console.log(person1.name)
console.log(person2.name)
