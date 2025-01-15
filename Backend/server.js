import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userroute.js";
import "dotenv/config";

// App configuration
const app = express();
let port = process.env.PORT || 5003; // Use the PORT environment variable if available, otherwise default to 5000

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
connectDB().catch((err) => {
    console.error("Database connection failed:", err.message);
    process.exit(1); // Exit process with failure if database connection fails
});

// API endpoints
// Uncomment and ensure the router is correctly implemented if you have it
// import userRouter from "./routes/userRouter.js"; 
// app.use("/api/user", userRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.get("/", (req, res) => {
    res.send("API working");
});

const server = app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use. Trying another port...`);
        port++;
        server.listen(port);
    } else {
        console.error(err);
        process.exit(1);
    }
});