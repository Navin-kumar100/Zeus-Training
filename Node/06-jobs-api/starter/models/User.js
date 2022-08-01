const { required, func } = require("joi");
const bcrypt=require('bcryptjs');
const jwt =require('jsonwebtoken')


const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provied name"],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, "please provied email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "please provide valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please provied password"],
    minlength: 6,
  },

});

UserSchema.pre('save',async function(){
  const salt =await bcrypt.genSalt(10)
  this.password=await bcrypt.hash(this.password,salt)
})

UserSchema.methods.CreateJWT=function(){
  return jwt.sign({userId:this._id,name:this.name},'jwtSecret',{expiresIn:"30d"})
}

UserSchema.methods.Comparepassword=async function(condidatePassword){
const Ismatch= await bcrypt.compare(condidatePassword,this.password);
return Ismatch;
}

module.exports=mongoose.model("User",UserSchema);