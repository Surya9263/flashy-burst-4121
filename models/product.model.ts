import mongoose, { Types } from "mongoose";
import { Iproduct } from "../interface/product.interface";

const productSchema = new mongoose.Schema<Iproduct>({
    category:{type:mongoose.Schema.Types.ObjectId, ref:"category"},
    subCategory:{type:mongoose.Schema.Types.ObjectId, ref:"subcategory"},
    pType:{type:mongoose.Schema.Types.ObjectId, ref:"producttype"},
    name:String,
    price:String,
    mainImg:String,
    supImg:{type:Array<mongoose.Schema.Types.ObjectId>, ref:"supimage", default:[]},
    description:String,
    colors:{type:Array<String>, default:[]},
    psize:{type:Array<String>, default:[]},
    features:{type:Array<String>, default:[]},
},{timestamps:true})

const Product = mongoose.models.product || mongoose.model('product', productSchema)
export default Product