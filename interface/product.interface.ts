import { Types } from "mongoose";


// main product interface
export interface Iproduct {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======

 

>>>>>>> 53636d04e5b5d7cdd1845a14c37f528a3a3207c8
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
<<<<<<< HEAD
>>>>>>> 92f5832fa8f9dad40205262dd0a46b7aac87b24d
=======

>>>>>>> 53636d04e5b5d7cdd1845a14c37f528a3a3207c8
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