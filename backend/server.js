const express=require('express')

//start the express app
const app=express()
//listen to a certain port number
app.listen(4000,()=>{
    console.log("Server Running")
})