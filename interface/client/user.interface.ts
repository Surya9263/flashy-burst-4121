

export interface Iuserclient {
    _id:string;
    name:string;
    email:string;
    role:"admin"|"user";
    phone?:string;
    address?:string;
    cart?:Array<string>
}

export interface Iuserstate{
    isLoading:boolean;
    isError:boolean;
    errormsg:string;
    users:Array<Iuserclient>

}