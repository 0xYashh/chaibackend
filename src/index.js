// require('dotenv').config({path:'./env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:"env"
})

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port ${process.env.PORT}`);
  })  
})
.catch((err)=>{
    console.log("MONGODB connection failed !!!",err)
})

















/* first approach connecting DB directly from index.js
import express from "express"
const app = express()

// function connectDB(){

// }
// connectDB()

//or
;(async () => {
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       //app.on is from express
       app.on("errror",(error)=>{
        console.log("ERRR: ",error);
        throw error
       })

       app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port${process.env.PORT} `)
       })
    }catch (error){
        console.log("ERROR: ",error)
    }
})()*/