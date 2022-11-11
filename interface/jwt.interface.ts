import { Types } from "mongoose";

export interface jwtPayload {
    userId:Types.ObjectId;
    role:string;
}


export interface jwtDecoded {
    userId:string;
        role:string;
        exp:number;
        iat:number;
}
export interface jwtstatus {
    decoded:jwtDecoded;
    status: boolean;
    errmsg: any;
}

export interface tokenObj {
    userAgent:string;
    token:string;
}