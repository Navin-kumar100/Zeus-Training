class CustomAPIError extends Error{
    constructor(messege,statusCode)
  {  super(messege);
    this.statusCode=statusCode}
}
const createCustomeError=(msg,statusCode)=>{
    return new CustomAPIError(msg,statusCode)
}
module.exports={createCustomeError,CustomAPIError}