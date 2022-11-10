import mongoose from "mongoose";
import { Iprodsize } from "../interface/product.interface";

const productSizeSchema = new mongoose.Schema({
    type:String,
    size:String,
    standard:String,
})

const ProductSize =  mongoose.models.productsize||mongoose.model('productsize', productSizeSchema)

export default ProductSize