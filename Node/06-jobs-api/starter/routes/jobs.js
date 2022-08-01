const express = require("express");
const router = express.Router();

const {
  getAlljob,
  getAlljobs,
  Updatejob,
  Createjob,
  Deletejob,
} = require("../controllers/jobs");


router.route('/').post(Createjob).get(getAlljobs)

router.route('/:id').post(Deletejob).get(getAlljob).patch(Updatejob)




module.exports=router