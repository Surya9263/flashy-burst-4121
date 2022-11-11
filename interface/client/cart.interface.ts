import { Types } from "mongoose";

export interface CIcart {
    cartItems:{type:Array<{prodId:Types.ObjectId,prodCount:Number}>}
    userId:{type:Types.ObjectId}
}

