const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "product name must be provided"],
  },
  price: {
    type: String,
    required: [true, "product price must be provided"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    defalut: 4.5,
  },
  createAt:{
    type:Date,
    default:Date.now(),
  },
  company:{
    type:String,
    enum:{
        values:['ikea','liddy','caressa',"marcos"],
        message:`${values} is not supported`
       },
    // enum:['ikea','liddy','caressa',"marcos"]
  }
});


module.exports=mongoose.model("Product",productSchema)