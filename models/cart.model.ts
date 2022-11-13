import mongoose from "mongoose";
import { Icart } from "../interface/cart.interface";

const cartSchema=new mongoose.Schema<Icart>({
   prodId:{type:mongoose.Schema.Types.ObjectId,ref:"product"},
   prodCount:Number,
   color:String,
   size:String,
   price:Number,
   userId:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
   orderplaced:Boolean,
})

const Cart=mongoose.models.cart || mongoose.model("cart",cartSchema);

export default Cart