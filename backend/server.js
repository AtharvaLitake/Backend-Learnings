const express = require("express");
//get env variables
require("dotenv").config();
//start the express app
const app = express();
//installing mongoose
const mongoose = require("mongoose");
//routes --> importing
const workoutRoutes = require("./Routes/workouts");

//middleware
app.use(express.json());
app.use((req, res, next) => {
  //logging the request
  console.log(req.path, req.method);
  next();
});

//router handler
// app.get('/',(req,res)=>{
//     //sends a json string
//     res.json({msg:"Welcome to the app"})
// })

//routes
app.use("/api/workouts", workoutRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //it takes some time hence we have to use .then method
    console.log("Db connected successfully");
    //listen -->only when database is connected
    //process is a global object
    app.listen(process.env.PORT, () => {
      console.log("Server Running");
    });
  })
  .catch((error) => {
    console.log(error);
  });
