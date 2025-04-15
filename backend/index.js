import express from 'express';
import cors from 'cors';

// import dotenv from 'dotenv';
// dotenv.config(); 

import connectDB from './config/db.js';
connectDB();

import mongoose from 'mongoose';

import router from './api/order.js'; 

mongoose.connect('mongodb://localhost:27017/shoppingDB')
.then(()=> {
    console.log("MongoDB connected successfully");
})
.catch((error)=> {
    console.log("MongoDB connection failed", error.message);
    process.exit(1);
});


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/orders", router); // Mount the order router on the /api/orders path

// app.get("/qqq", (req, res)=> {              //req- request , res- response
//     res.json({messgae: "Helo world"});
// })

app.post("/orders", (req, res) => {
    const order = req.body; // Get the data sent from frontend
    console.log("Wt ever is sent by frontend is here re babba, but in console of vs code backend terminal", order);
     
    res.status(201).send({ message: "This to to conform that the data sent by frontend is received, but in frontend console along with msg writen in frontend", order });
  });

app.listen(5000, () => {
    console.log("Server has started on port 5000");
})

