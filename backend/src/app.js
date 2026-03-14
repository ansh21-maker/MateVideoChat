import express from "express";
import { createServer } from "node:http";

import { connectToSocket } from "./controllers/socketmanager.js";
import mongoose from "mongoose";


import cors from "cors";
import userRoutes from "./routes/users.route.js";
import { connect } from "node:http2";


const app=express();
const server=createServer(app);
 const io=connectToSocket(server)

app.set("port",(process.env.PORT||8000));
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));
app.use("/api/v1/users",userRoutes);





app.get("/home",(req,res)=>{
    return res.json("Home:hello");
})


const start=async()=>{
    app.set("mongo_user")
    const connectionDb=await mongoose.connect("mongodb+srv://anshulkumar21:anshmaxx2026@cluster0.rz2u5ky.mongodb.net/");
    console.log( `Mongo connected DB host:${connectionDb.connection.host}`);
server.listen(8000,()=>{
    console.log("server is running on port 8000");
})}


start();
