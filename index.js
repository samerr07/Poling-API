const express = require("express");
const server = express();
const mongoose = require('mongoose');
const questionRouter = require("./routes/question")
const optionRouter = require("./routes/option")


//Connecting to database
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/PollingApi');
  console.log("Database Connected")

  
}

//Middleware
server.use(express.json())

//Routes
server.use("/question",questionRouter.router)
server.use("/option",optionRouter.router)


//listen to server
server.listen(8081,()=>{
    console.log("Server Started")
})