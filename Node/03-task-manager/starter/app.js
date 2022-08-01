const ConnectDB = require("./DB/config.db");
const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const Notfound= require('./middleware/notfound.middleware')
const ErrorHandle= require('./middleware/error-handle')

const taskRoute = require("./routes/task.route");

app.use(express.json());

app.use("/api/v1/task", taskRoute);

app.use(Notfound)
app.use(ErrorHandle)

const port = process.env.PORT || 3000;

// console.log(process.env.MONGODB_URL)

const start = async () => {
  try {
   const conn= await ConnectDB(process.env.MONGODB_URL)
//    console.log(conn)
    app.listen(port, () => console.log(`server is running port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
