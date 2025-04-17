import express from 'express';
import bcrypt from 'bcrypt'; // For hashing passwords
import jwt from 'jsonwebtoken'; // For generating JWT tokens
import User from '../models/User.js'; // Import the User model

const router3 = express.Router();

router3.post('/login', async(req , res) => {
    const { email, password } = req.body;

    try{

        const user = await User.findOne({email});                                                               //imp
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });         // always return as response i.e. res.status().json();
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);                                   //imp
        

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        
        const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });                       //imp
        res.status(200).json({ token, user });

    }catch(error){
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Error logging in', error });
    }
});

export default router3; 


// import express from 'express';
// import bcrypt from 'bcrypt'; // For hashing passwords
// import jwt from 'jsonwebtoken'; // For generating JWT tokens
// import User from '../models/User.js'; // Import the User model

// const router = express.Router();

// router.post('/login', async(req , res) => {
//     const { email, password } = req.body;
//     try{

//     }catch(error){
//         console.error('Error logging in:', error);
//         res.status(500).json({ message: 'Error logging in', error });
//     }
// });

// export default router; 
