const jwt = require("jsonwebtoken");
const {UnauthenticatedError,BadRequestError,CustomAPIError} = require("../errors");

// const CustomAPIError = require("../errors/custom-error");


const authmiddleware= async(req,res,next)=>{
console.log(req.headers.authorization);

const authHeader = req.headers.authorization;
if (!authHeader || !authHeader.startsWith("Bearer")) {
  throw new UnauthenticatedError("No token provided");
}
const token = authHeader.split(" ")[1]

try {
    const decode=jwt.verify(token,process.env.JWT_SECRET)
    const {id,username}=decode
    req.user={id,username}
    next();
} catch (error) {
    throw new UnauthenticatedError('Not authorized to access this route ')
}



}
module.exports=authmiddleware;