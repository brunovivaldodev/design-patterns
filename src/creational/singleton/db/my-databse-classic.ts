export class MyDatabaseClassic {
  private static instance : MyDatabaseClassic | null = null;

  private constructor() {}

  public static getInstance() : MyDatabaseClassic{

    if( MyDatabaseClassic.instance === null){
      return MyDatabaseClassic.instance = new MyDatabaseClassic()
    }

    return MyDatabaseClassic.instance

  }
}

const b = MyDatabaseClassic.getInstance()
const z = MyDatabaseClassic.getInstance()

console.log(b)
