import mongoose from 'mongoose'
import { Iuser } from '../interface/user.interface';

const userSchema = new mongoose.Schema<Iuser>({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    role:{type:String,enum:["admin","user"],default:"user"},
    password:{type:String,required:true,min:8},
    otp:{type:String,default:""},
    phone:{type:String,default:""},
    address:{type:String,default:""},
    rToken:{type:String,default:""},
    cart:Array<mongoose.Schema.Types.ObjectId>
})

const User =  mongoose.models.user||mongoose.model('user', userSchema)

export default User;

