import { Types } from "mongoose";

// main product interface
export interface CIproduct {
  _id: string;
  category: Types.ObjectId;
  subCategory: Types.ObjectId;
  name: string;
  price: string;
  mainImg: string;
  supImg?: Array<CIsuppImg>;
  description: string;
  color: string;
  pType?: CIpType;
  pSize?: CIprodsize;
}
export interface CIsuppImg {
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