import mongoose, { Mongoose } from "mongoose";
import { Icategory } from "../interface/interface";

const categorySchema = new mongoose.Schema<Icategory>({
    name:String,
    slides:{type:Array<mongoose.Schema.Types.ObjectId>,  ref:"slide", default:[]},
    subCategory:{type:[{type:mongoose.Schema.Types.ObjectId,  ref:"subcategory"}], default:[]},
    products:{type:Array<mongoose.Schema.Types.ObjectId>,  ref:"product", default:[]},
},{timestamps:true})

const Caregory = mongoose.models.category||mongoose.model('category', categorySchema);

export default Caregory