
const User=require('../models/User')
const {StatusCodes}=require('http-status-codes');
const { json } = require('express');
const bcrypt=require('bcryptjs')
const { BadRequestError, UnauthenticatedError } = require('../errors');


const Register=async(req,res)=>{
   
    const {name,email,password}=req.body;
if(!name || !email || !password){
throw new BadRequestError("all are compulsory value");
}
  const user=await User.create({...req.body});
 
  const token=user.CreateJWT();
    res.status(StatusCodes.CREATED).json({user:{name:user.name},token})
}

const login=async(req,res)=>{
   const {email,password}=req.body
   if(!email || !password)
   {
    throw new BadRequestError("please provided email and password ")
   }

   const user =await User.findOne({email:email});
   if(!user)
   {
    throw new UnauthenticatedError('invaild credentials')
   }
   
   const Iscorrect=user.Comparepassword(password);
   if(!Iscorrect)
   {
    throw new UnauthenticatedError('invaild credentials')
   }
   const token =user.CreateJWT();
   res.status(StatusCodes.OK).json({user:{username:user.name},token})
}
module.exports={
    Register,login
}