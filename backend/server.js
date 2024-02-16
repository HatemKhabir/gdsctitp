import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose";
import workoutRoutes from "./routes/workoutRoutes.js"

dotenv.config()
const app=express();

app.use(cors())
app.use(express.json());

app.use("/api/workout",workoutRoutes)

mongoose.connect(process.env.mongo).then(()=>{
    console.log("db connected")
app.listen(process.env.PORT,()=>{
    console.log(`server connected${process.env.PORT}`)
})  
}).catch((err)=>{console.log(err)})