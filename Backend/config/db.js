import mongoose from "mongoose";
export const connectDb = async () =>{
    await mongoose.connect('mongodb+srv://arafatrahman4580:ar13092022@cluster0.wa8dw.mongodb.net/Foodie').then (()=>console.log("DB Connected"));

}