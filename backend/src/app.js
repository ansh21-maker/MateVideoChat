import express from "express";
import {createServer}from "node:http";

import { Server } from "socket.io";
import mongoose from "mongoose";

import cors from "cors";
import { start } from "node:repl";

const app=express();

app.get("/home",(req,res)=>{
    return res.json("Home:hello");
})


const start=async()=>{
app.listen("3000",()=>{
    console.log("server is running on port 3000");
})}


start();
