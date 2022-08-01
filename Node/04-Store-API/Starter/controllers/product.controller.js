const getAllProductStatic=async(req,res)=>{
res.status(200).json({msg:"product testing route"})
}
const getAllProduct=async(req,res)=>{
    throw new Error("test code")
    res.status(200).json({msg:"product testing route"})
    }
module.exports={
    getAllProductStatic,
    getAllProduct

}