import mongoose from 'mongoose'

 
const URI = process.env.MONGO_URI as string
console.log(URI);

const connectDB = ()=>{
    return mongoose.connect(URI)
}

export default connectDB

