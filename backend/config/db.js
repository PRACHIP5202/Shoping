import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://localhost:27017/shopping');
        console.log("MongoDB connected!");
    }
    catch(error){
        console.log("mongodb connection failed", error.message);
        process.exit(1);
    }
}

export default connectDB;