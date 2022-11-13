import { CIproduct } from "./product.interface";
export interface CIcart {
    _id:string;
    prodId:CIproduct;
    prodCount:number;
    color:string;
    size:string;
    price:number;
    userId:string;
    orderplaced:boolean;
}

export interface initialState{
    loading:boolean;
    error:boolean;
    errorMsg:string;
    cartItems:Array<CIcart>;
    usersCart:Array<CIcart>
}