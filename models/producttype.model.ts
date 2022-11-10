import mongoose from "mongoose";
import { IpType } from "../interface/product.interface";

const prodTypeSchema = new mongoose.Schema({
    category:{type:mongoose.Schema.Types.ObjectId},
    name:String,
})

const ProductType = mongoose.model('producttype', prodTypeSchema)
export default ProductType;



