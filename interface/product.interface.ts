import { Types } from "mongoose";


// main product interface
export interface Iproduct {
  _id?: Types.ObjectId;
  category: Types.ObjectId;
  subCategory: Types.ObjectId;
  name: string;
  price: string;
  mainImg: string;
  supImg?: Array<Types.ObjectId>;
  description: string;
  color: string;
  pType: Types.ObjectId;
  pSize: Types.ObjectId;
}


// Supporing images interface
export interface IsuppImg {
    product:Types.ObjectId;
    imgLink:string;
}


// seperate interface for Types
export interface IpType {
    name:string
}

// Separate Size 
export interface Iprodsize {
    type:string;
    size:string;
    standard:string;
}