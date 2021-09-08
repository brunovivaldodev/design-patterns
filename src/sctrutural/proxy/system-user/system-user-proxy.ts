import { AdminUser } from "./admin-user";
import { IUser, IUserAddress } from "./IUser";


export class SystemUserProxy implements IUser {
    private realUser  : IUser | null = null
    private realUserAddresses : IUserAddress[] | null = null 

    constructor(public fristName : string , public userName : string  ) {}

    private createUser() : IUser {
        if (this.realUser === null) {
            this.realUser = new AdminUser(this.fristName, this.userName)
        }

        return this.realUser
    }
    async getAddresses(): Promise<IUserAddress[]> {

        this.realUser = this.createUser()

        if(this.realUserAddresses === null) {
            this.realUserAddresses = await this.realUser.getAddresses()
        }

        return this.realUserAddresses
        
    }
}