import mongoose, { Types } from 'mongoose'
import { Islide } from '../interface/interface'

const sliceSchema = new mongoose.Schema<Islide>({
    category:{type:mongoose.Schema.Types.ObjectId, ref:"category"},
    subcategory:{type:mongoose.Schema.Types.ObjectId, ref:"subcategory"},
    urlType:{type:String, enum:["image", "video"]},
    imgurl:String,
    navigateUrl:String,
})

const Slide = mongoose.models.slide || mongoose.model('slide', sliceSchema);
export default Slide;