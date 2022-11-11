import { Types } from "mongoose";

export interface Iuser {
    name:string;
    email:string;
    role:"admin"|"user";
    password:string;
    otp?:string;
    phone?:string;
    address?:string;
    rToken?:string;
    cart?:Array<Types.ObjectId>
}