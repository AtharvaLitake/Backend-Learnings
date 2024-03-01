const express=require('express')
//require express router
//becoz we dont have access to app
const router = express.Router()

router.get('/',(req,res)=>{
    //getting all workouts
    res.json({msg:'Get all Workouts'})
})
//get a single workout
router.get('/:id',(req,res)=>{
    res.json({msg:'Single Workout'})
})

//post a new workout
router.post('/',(req,res)=>{
    res.json({msg:'POST A NEW workout'})
})

//delete a workout
router.delete('/:id',(req,res)=>{
    res.json({msg:'Delete workout'})
})

//update a workout
router.patch('/:id',(req,res)=>{
    res.json({msg:'Update workout'})
})
module.exports=router