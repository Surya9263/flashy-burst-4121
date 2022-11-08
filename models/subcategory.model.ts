import mongoose, { Types } from "mongoose";
import { IsubCategory } from "../interface/interface";


const subcatScehma = new mongoose.Schema<IsubCategory>({
    catInfo:Types.ObjectId,
    name:String,
},{timestamps:true})

const SubCategory = mongoose.models.subcategory || mongoose.model('subcategory', subcatScehma)
export default SubCategory