

export interface Iuserclient {
    _id:string;
    name:string;
    email:string;
    role:"admin"|"user"|"";
    phone?:string;
    address?:string;
    cart?:Array<string>;
    orderPlaced:boolean;
}

export interface Iuserstate{
    isLoading:boolean;
    isError:boolean;
    errormsg:string;
    users:Array<Iuserclient>
    authUser:Iuserclient

}

export interface Iauthclient {
    isLoading:boolean,
    isError:boolean,
    isAuth:boolean,
    userId:string,
    iat:number,
    ext:number,
    role:string,
}