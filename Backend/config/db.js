import mongoose from "mongoose";
//import dotenv from "dotenv";

export const connectDB =async()=>{
await mongoose.connect('mongodb+srv://arafatrahman4580:ar180624@cluster0.turaj.mongodb.net/foodie').then(()=>console.log("DB Connected"));

}