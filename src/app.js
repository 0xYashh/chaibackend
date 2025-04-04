import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app =  express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({   //taking data from form
    limit:"16kb"
}))
// app.use(express.urlencoded())
//or
app.use(express.urlencoded({extended: true, limit:"16kb"}))
app.use(express.static("public"))

app.use(cookieParser())





//routes import

import userRouter from "./routes/user.routes.js"

//routes declaration
// app.use("/users",userRouter)
app.use("/api/v1/users",userRouter)

// http://localhost:8000/user/register
// http://localhost:8000/api/v1/user/register

// http://localhost:8000/user/login

export {app}