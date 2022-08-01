require('express-async-errors');
const dotenv = require("dotenv").config();
const express = require("express");
const productRouter=require('./routes/Product.route')
const notfound = require("./middlewares/notfound.middleware");
const ErrorHandler = require("./middlewares/error-handle");
const ConnectDB=require("./db/config.db");
const app = express();

app.use(express.json());
app.use("/try", (req, res) => console.log("try"));
app.use('/api/v1/products',productRouter);
app.use(notfound);
app.use(ErrorHandler);

const port = process.env.PORT || 3000;
const start = async() => {
  try {
    const conn=await ConnectDB(process.env.MONGODB_URL);
    app.listen(port, console.log(`server is running port ${port}`));
  } catch (err) {
    console.log(err);
  }
};
start();