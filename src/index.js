import dotenv from "dotenv";
import express from "express"
import connectDB from "./db/index.js";
const app=express()

dotenv.config()


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 6000,()=>{
        console.log(`Server is running on the PORT ${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log("MONGODB connection failed",err);
    
})









/*                     APPROACH-1
the semicolon is applied below so as to avoid error just in case someone
 has forgotten to end the aboveline with it
;(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        //in above line db got connected but in case express is not able to connect with it
        //we are using app.on() to see the error
        app.on("error",(error)=>{
            console.error(error);
            throw error
        }) 

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }catch(error){
        console.error(error);
        throw error('ERROR:',error)

    }

})()
*/











//Database-










//Username - mtcjaipur   ; 
// Password - 