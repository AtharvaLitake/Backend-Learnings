const express=require('express')
const {createWorkout,getWorkouts,getWorkout}=require('../Controllers/workoutController')
//require express router
//becoz we dont have access to app
const router = express.Router()
//get all workouts
router.get('/',getWorkouts)
//get a single workout
router.get('/:id',getWorkout)

//post a new workout
router.post('/', createWorkout)

//delete a workout
router.delete('/:id',(req,res)=>{
    res.json({msg:'Delete workout'})
})

//update a workout
router.patch('/:id',(req,res)=>{
    res.json({msg:'Update workout'})
})
module.exports=router