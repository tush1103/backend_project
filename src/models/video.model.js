import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema(
  {
    videoFile:{
        type:String, //cloudinary url
        required:true
    },
    thumbnail:{
        type:String, //cloudinary url
        required:true
    },
    title:{
        type:String, 
        required:true
    },
    description:{
        type:String, 
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
  },
  {
    timestamps: true,
  }
);


videoSchema.plugin(mongooseAggregatePaginate) //mongoose ye option deta hai hme ki hum apne khudke plugins bhi add kr skte hai,ab hum yaha aggregation queries likh skte hai,regular queries to likh hi skte hai 
export const Video = mongoose.model("Video", videoSchema);
