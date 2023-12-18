// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config({
    path:'./env'
})


connectDB()




















//not so good approach
/*
import express from "express" 
const app=express()


//iffi,function ko bnaya or immediately execute kr diya
;( async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        //ki database to connect hogya hai pr kya pta hmari app baat na kr pa rhi ho db se to uske liye ye event listener hai
        app.on("errror",(error)=>{
            console.log("ERR: ",error)
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }
    catch(error){
        console.error("Error: ",error)
        throw error 
    }
})()

*/