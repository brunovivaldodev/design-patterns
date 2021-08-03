interface User {
  name: string,
  age: number
}
const Users: User[] = []

export const MyDatabaseModule = {
  add(user: User) {
    Users.push(user)
  }

  // other methods
}