import {CIproduct} from './product.interface'


export interface IsupImage {
    _id:string;
    prodid:CIproduct;
    imglink:string;
}



export interface IsupImgInitState {
    isLoading:boolean;
    isErro:boolean;
    errorMsg:string;
    images:Array<IsupImage>
}
// interface to add new supImage
export interface IsupImageAdd{
    cid:string;
    scid:string;
    prodid:string;
    imglink:string;
}