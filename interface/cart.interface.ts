import { Types } from "mongoose";

export interface Icart {
    prodId:Types.ObjectId;
    prodCount:number;
    color:string;
    size:string;
    price:number;
    userId:Types.ObjectId
}
