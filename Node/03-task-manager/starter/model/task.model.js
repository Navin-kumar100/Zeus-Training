const mongoose=require('mongoose');

const TaskSchema=new mongoose.Schema({
    name:{
        type: String,
        required: [true,"name must be required"],
        trim:true
      },
    complete:{
        type: Boolean,
       default:false,
      }
})
module.exports=mongoose.model("Task",TaskSchema)