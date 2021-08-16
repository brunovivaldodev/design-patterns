import isEmail from "validator/lib/isEmail";
import { EmailValidatorFnProtocol } from "./email-validator-fn-protocol";

export const emailValidatorFnAdapter : EmailValidatorFnProtocol = (value : string) : boolean =>{
    return isEmail(value)
}