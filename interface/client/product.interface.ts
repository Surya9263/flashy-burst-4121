import { Types } from "mongoose";
import {CIcategory, IsubCategory} from './category.interface'
import {IpType} from './productType'
import {IsupImage} from './supportingImage.interface'
// main product interface
export interface CIproduct {
   _id:string;
  category:CIcategory;
  subCategory:IsubCategory;
  pType:IpType;
  name:string;
  price:string;
  mainImg:string;
  supImg?:Array<IsupImage>
  description:string;
  colors?:Array<string>;
  psize?:Array<string>;
  features?:Array<string>;
}
export interface CIsuppImg {
  _id:string;
  product: Types.ObjectId;
  imgLink: string;
}

// seperate interface for Types
export interface CIpType {
  name: string;
}

// Separate Size
export interface CIprodsize {
  type: string;
  size: string;
  standard: string;
}
export interface initialState {
  isLoading: boolean;
  isErro: boolean;
  errorMsg: string;
  products: Array<CIproduct>;
}

export interface IproRem {
  id: string;
  msg: string;
}



// input interface for adding new product
export interface IaddProduct {
  category:string,
  subCategory:string, 
  pType:string, 
  name:string,
  price:string, 
  mainImg:string, 
  discription:string
}