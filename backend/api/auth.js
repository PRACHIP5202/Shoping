import express from 'express';
import bcrypt from 'bcrypt'; // For hashing passwords
import User from '../models/User.js'; // Import the User model

const router = express.Router();

router.post('/signup', async(req, res) => {
    const {name, email, password, address } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });                                  //imp
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);                                 //imp

        // Create a new user instance
        const user = new User({
            name,
            email,
            password: hashedPassword,
            address,
        });

        // Save the user to the database
        const savedUser = await user.save();     //imp to store in mongodb
        
        const { password: pwd, ...userWithoutPassword } = savedUser._doc;
        res.status(201).json(userWithoutPassword);

        // res.status(201).json({message: 'Saved raa',savedUser});
    } catch (error) {
        console.error('Error signing up:', error);
        res.status(500).json({ message: 'Error signing up', error });
    }
})

export default router;

