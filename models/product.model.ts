import mongoose, { Types } from "mongoose";
import { Iproduct } from "../interface/product.interface";

const productSchema = new mongoose.Schema<Iproduct>({
    category:{type:mongoose.Schema.Types.ObjectId, ref:"category"},
    subCategory:{type:mongoose.Schema.Types.ObjectId, ref:"subcategory"},
    name:String,
    price:String,
    mainImg:String,
    supImg:{type:Array<mongoose.Schema.Types.ObjectId>, ref:"supimage"},
    description:String,
    color:String,
    pType:{type:mongoose.Schema.Types.ObjectId, ref:"producttype"},
    pSize:{type:mongoose.Schema.Types.ObjectId, ref:"productsize"},
},{timestamps:true})

const Product = mongoose.models.product || mongoose.model('product', productSchema)
export default Product