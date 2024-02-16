import express from "express"

const router=express.Router();

router.get("/",(request,response)=>{
    response.status(201).send("My workouts")
})




export default router
