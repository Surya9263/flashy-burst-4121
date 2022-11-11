// category Interface

import { Types } from "mongoose"

export interface Icategory {
    name:string,
    slides?:Array<Types.ObjectId>
    subCategory?:Array<Types.ObjectId>
    products?:Array<Types.ObjectId>
}

// MEN  - [1:{name. },2,3,4,5]  WOMEN

//  JEANS ID -{}
// sub category interface 

export interface IsubCategory {
    catInfo:Types.ObjectId;
    name:string;
    slides?:Array<Types.ObjectId>;
    products?:Array<Types.ObjectId>
}


export interface Islide {
    category:Types.ObjectId;
    subcategory:Types.ObjectId;
    urlType:'image'|'video';
    imgurl:string;
    navigateUrl:string;
}

