import mongoose from 'mongoose'

 
const URI = process.env.MONGO_URI as string


const connectDB = ()=>{
    return mongoose.connect(URI)
}

export default connectDB

