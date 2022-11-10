
export interface CIcategory {
    _id:string,
    name:string
    slides?:Array<Islide>
    subCategory?:Array<IsubCategory>
    products?:Array<Iproduct>
}

export interface Iproduct{
    _id:string;
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
    slides?:Array<string>;
    products?:Array<string>
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