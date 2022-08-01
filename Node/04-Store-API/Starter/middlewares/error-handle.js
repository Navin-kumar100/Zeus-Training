
const ErrorHandle = (err, req, res, next) => {
 
  console.log(err)
  return res
    .status(500)
    .json({ msg: "Something Went Wrong Please Try Again !" });
};

module.exports = ErrorHandle;
