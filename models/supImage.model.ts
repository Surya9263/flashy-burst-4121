import mongoose from "mongoose";
import { IsuppImg } from "../interface/product.interface";

const supImgSchema =  new mongoose.Schema({
    product:{type:mongoose.Schema.Types.ObjectId, ref:"product"},
    imglink:String,
})

const SupImage = mongoose.models.supimage || mongoose.model('supimage', supImgSchema)

export default SupImage