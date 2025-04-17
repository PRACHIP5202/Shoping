import express from 'express';
import cors from 'cors';

// import dotenv from 'dotenv';
// dotenv.config(); 

import connectDB from './config/db.js';
connectDB();                                   // no need to inport connect() again here!! bcz of imported from db.js


import routerrr from './api/order.js'; 

import router from './api/Auth.js'; // Import the auth router


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/orders", routerrr); // Mount the order router on the /api/orders path

// app.get("/qqq", (req, res)=> {              //req- request , res- response
//     res.json({messgae: "Helo world"});
// })
app.use("/api", router); // Mount the auth router on the /api path


app.post("/orders", (req, res) => {
    const order = req.body; // Get the data sent from frontend
    console.log("Wt ever is sent by frontend is here re babba, but in console of vs code backend terminal", order);
     
    res.status(201).send({ message: "This to to conform that the data sent by frontend is received, but in frontend console along with msg writen in frontend", order });
  });

app.listen(5000, () => {
    console.log("Server has started on port 5000");
})

