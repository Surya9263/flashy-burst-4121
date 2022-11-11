import mongoose from "mongoose";
import { IpType } from "../interface/product.interface";

const prodTypeSchema = new mongoose.Schema({
    category:{type:mongoose.Schema.Types.ObjectId, ref:"category"},
    name:String,
})

const ProductType = mongoose.models.producttype ||mongoose.model('producttype', prodTypeSchema)
export default ProductType;



