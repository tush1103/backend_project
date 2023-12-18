import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB=async()=>{
    try{
        //connection hone ke baad jo bhi response hai usko mongoose return krta hai or vo humne hold kr liya
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\nMongoDB connected!! DB HOST: ${connectionInstance.connection.host}`)
    }
    catch(error){
        console.log("MongoDb connection error ",error)

        //jo current hmari ek application chal rhi hai vo kisi na kisi process pr chl rhi hogi to ye uske reference hai, hum yaha pr error bhi throw kra skte hai instead of doing this
        process.exit(1)
    }
}

export default connectDB