import mongoose from 'mongoose';
import dotenv from 'dotenv'
 dotenv.config()

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('MongoDB Connected Successfully')
    } catch (error) {
        console.log("Error connecting DB", error.message)
    }
}

export default connectDB