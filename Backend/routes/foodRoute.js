import express from "express"
import { addFood } from "../controllers/foodController.js"
import multer from "multer";

const foodRouter = express.Router();


//Image storage
const storage =multer.diskStorage({
    destination:"Uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)}
})

const upload=multer({storage:storage})

foodRouter.post("/add", addFood)


export default foodRouter;