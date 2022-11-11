import {CIcategory} from "./category.interface"

export interface IpType {
    _id:string;
    category:CIcategory;
    name:string;
}

export interface IproTypeInitState {
    isLoading:boolean;
    isErro:boolean;
    errorMsg:string;
    productTypes:Array<IpType>
}