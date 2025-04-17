import express from 'express';
import bcrypt from 'bcrypt'; // For hashing passwords
import jwt from 'jsonwebtoken'; // For generating JWT tokens
import User from '../models/User.js'; // Import the User model

const router = express.Router();

router.post('/login', async(req , res) => {
    const { email, password } = req.body;
    try{

    }catch(error){
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Error logging in', error });
    }
});

export default router; 


// In backend wt happens is:
// 1. Define a model n schema for db in models/smthing.js  (.Schema n then .model is exported )
// 2. Define the routes in api/smthing.js  (reffer above written code)
// 3. Define the server in index.js      
//     ( 
//         import router from './api/order.js'; 
//         app.use("/api", routerrr);     [it is found in 'http://localhost:5000/api/{followed by wtever is written in router.post('', '...') }']
//     )
// 4. Define the db connection in config/db.js    (here connection b/w backend n mongodb is established)
