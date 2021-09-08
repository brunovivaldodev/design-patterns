export type IUserAddress = {
    street: string,
    number: number
}

export interface IUser {
    fristName: string,
    userName: string,

    getAddresses(): Promise<IUserAddress[]>

}