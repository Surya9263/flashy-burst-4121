import mongoose from "mongoose";
import { CIcart } from "../interface/client/cart.interface";

const cartSchema=new mongoose.Schema<CIcart>({
   cartItems:{type:Array<{prodId:mongoose.Schema.Types.ObjectId,prodCount:Number}>,default:[],ref:"user"},
   userId:String 
})

const Cart=mongoose.models.cart || mongoose.model("cart",cartSchema);

export default Cart