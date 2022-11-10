import {CIcategory, IsubCategory} from './category.interface'

export interface Islide {
    _id:string;
    category:CIcategory;
    subcategory:IsubCategory;
    urlType:'image'|'video';
    imgurl:string;
    navigateUrl:string;
}



export interface ISlideInitState {
    isLoading:boolean;
    isErro:boolean;
    errorMsg:string;
    slides:Array<Islide>
}

