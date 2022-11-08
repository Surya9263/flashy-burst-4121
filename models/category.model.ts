import mongoose from "mongoose";
import { Icategory } from "../interface/interface";

const categorySchema = new mongoose.Schema<Icategory>({
    name:String,
},{timestamps:true})

const Caregory = mongoose.models.category||mongoose.model('category', categorySchema);

export default Caregory