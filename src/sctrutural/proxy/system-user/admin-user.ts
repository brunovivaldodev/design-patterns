import { IUser, IUserAddress } from "./IUser";


export class AdminUser implements IUser {
    public fristName: string
    public userName: string

    constructor(fristName : string ,userName : string  ) {
        this.fristName = fristName;
        this.userName = userName
    }

    getAddresses(): Promise<IUserAddress[]> {

        return new Promise((resolve, reject) => {
            return setTimeout(() => {
                resolve(
                    [
                        { street: "Bruno", number: 50 },
                        { street: "Bruno", number: 50 },
                        { street: "Bruno", number: 50 },
                        { street: "Bruno", number: 50 }
                    ])
            }, 1000);
        })
    }
}