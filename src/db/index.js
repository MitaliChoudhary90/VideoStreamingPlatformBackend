import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB=async()=>{
    try{
        //await returns an object which can be stored
        const connectionInstance=await mongoose.connect
        (`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB connected!!. DB Host: ${connectionInstance.connection.host}`)
        

    }catch(error){
        console.log("MONGODB connection error: ",error);
        //read about process.exit(1)....there could be other numbers too
        process.exit(1)
    }
}

export default connectDB
