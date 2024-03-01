const mongoose=require('mongoose')
//for creating schema
const Schema=mongoose.Schema

const workoutSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    reps:{
        type:Number,
        required:true
    },
    load:{
        type:Number,
        required:true,
    }
},{timestamps:true})
//timestamp property tells when the property was added
//creation of model-->workout collection created
module.exports=mongoose.model('Workout',workoutSchema)

