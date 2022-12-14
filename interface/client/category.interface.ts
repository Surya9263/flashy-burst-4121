import { CIproduct } from "./product.interface";

export interface CIcategory {
    _id:string,
    name:string
    slides?:Array<Islide>
    subCategory?:Array<IsubCategory>
    products?:Array<string>
}


export interface Islide {
    _id:string;
    category:string;
    subcategory:string;
    urlType:'image'|'video';
    imgurl:string;
    navigateUrl:string;
}

export interface IsubCategory {
    _id:string
    catInfo:CIcategory;
    name:string;
    path:string;
    slides?:Array<string>;
    products?:Array<CIproduct>
}



export interface initialState {
    isLoading:boolean;
    isErro:boolean;
    errorMsg:string;
    categories:Array<CIcategory>
}

export interface ICatRem {
    id:string;
    msg:string
}



export interface IsubCatInitState {
    isLoading:boolean;
    isErro:boolean;
    errorMsg:string;
    subcategories:Array<IsubCategory>
}



