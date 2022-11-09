export interface Islide {
    _id:string;
    category:string;
    subcategory:string;
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

