class Person {
  name: string;
  age: number

}

class PersonBuilder {
  private person = new Person();

  setName(name: string): this {
    this.person.name = name;
    return this
  }

  setAge(age: number): this {
    this.person.age = age;
    return this
  }

  getResult() : Person {
    return this.person
  }
  getName() : string {
    return this.person.name
  }
}

const personBuilder = new PersonBuilder()
personBuilder.setAge(12)
console.log(personBuilder.setName("bruno"))
console.log(personBuilder.getName())
