

export interface Iuserclient {
    _id:string;
    name:string;
    email:string;
    role:"admin"|"user";
    password:string;
    otp?:string;
    phone?:string;
    address?:string;
    rToken?:string;
    cart?:Array<string>
}

export interface Iauthclient{
    isLoading:boolean;
    isError:boolean;
    isAuth:boolean;
    userId:string;
    iat:number;
    ext:number;
    role:string;

}