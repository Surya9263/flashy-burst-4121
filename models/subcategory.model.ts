import mongoose, { Types } from "mongoose";
import { IsubCategory } from "../interface/interface";


const subcatScehma = new mongoose.Schema<IsubCategory>({
    catInfo:{type:mongoose.Schema.Types.ObjectId, ref:"category"},
    name:String,
    slides:{type:Array<mongoose.Schema.Types.ObjectId>,  ref:"slide",default:[]}
},{timestamps:true})

const SubCategory = mongoose.models.subcategory || mongoose.model('subcategory', subcatScehma)
export default SubCategory