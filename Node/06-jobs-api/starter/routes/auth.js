const express = require("express");
const router = express.Router();

const { Register, login } = require("../controllers/auth");

router.post('/register',Register)
router.post('/log-in',login)


module.exports=router;


