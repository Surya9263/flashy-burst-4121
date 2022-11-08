// category Interface

import { Types } from "mongoose"

export interface Icategory {
    name:string
}

// sub category interface 

export interface IsubCategory {
    catInfo:Types.ObjectId;
    name:string
}


export interface Iuser {
    name:string;
    email:string;
    role:"admin|user";
    password:string
}