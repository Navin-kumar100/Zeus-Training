const express = require("express");

const jwt = require("jsonwebtoken");
const {UnauthenticatedError,BadRequestError,CustomAPIError} = require("../errors");


const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    throw new BadRequestError("Please Provide Email And Password ");
  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });

  res.status(200).json({ msg: "user created ", token });

  // res.send("fake login /register/signup route");
};

const dashboard = async (req, res) => {
    console.log(req.user)
    const luckynumber = Math.floor(Math.random() * 100);
    res.status(200).json({     msg: `hello ${req.user.username} `,
      secret: `here is your authorized data ,your lucky number is ${luckynumber} `,
    });
  
};

module.exports = {
  login,
  dashboard,
};
