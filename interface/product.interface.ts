import { Types } from "mongoose";


// main product interface
export interface Iproduct {
    category:Types.ObjectId;
    subCategory:Types.ObjectId;
    pType:Types.ObjectId;
    name:string;
    price:string;
    mainImg:string;
    supImg?:Array<Types.ObjectId>
    description:string;
    colors?:Array<string>;
    psize?:Array<string>;
    features?:Array<string>;
}


// Supporing images interface
export interface IsuppImg {
    product:Types.ObjectId;
    imgLink:string;
}


// seperate interface for Types
export interface IpType {
    category:Types.ObjectId;
    name:string;
}

// Separate Size 
export interface Iprodsize {
    type:string;
    size:string;
    standard:string;
}