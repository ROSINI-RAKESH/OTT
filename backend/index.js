// Packages
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";


//Files
import connectDB from "./config/db.js";
import json from "body-parser/lib/types/json.js";
import urlencoded from "body-parser/lib/types/urlencoded.js";

//config
dotenv.config()

connectDB()

const app=express()

//middlewares

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

const PORT=process.env.PORT||3000

app.listen(PORT,()=>console.log(`Server is successfully run in PORT: ${PORT}`))



