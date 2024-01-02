const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}
export {asyncHandler}

















//asyncHandler is a higher order function.Vo functions jo function ko as a parameter bhi accept kr skte hai ya fir return bhi kr skte hai
// const asyncHandler=(fn)=>{()=>{}} 
//or
// const asyncHandler=(fn)=>async (req,res,next)=>{
//     try{
//         await fn(req,res,next)
//     }
//     catch(error){
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }