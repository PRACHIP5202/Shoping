import express from 'express';
import Order from '../models/Order.js'; 

const routerrr = express.Router();     // express.Router().post(...).get(...) 


    routerrr.post('/', async (req, res) => {
        
        try {
            const order = new Order(req.body); // Create an order instance
            const savedOrder = await order.save(); // Save to DB
            console.log("Saved to MongoDB:", savedOrder);
            res.status(201).json(savedOrder);

        } catch (error) {
        res.status(500).json({ message: 'Error saving order', error }); // Handle errors
        }
    })
    routerrr.get('/', async (req, res) => {
        try {
        const orders = await Order.find(); // Fetch all orders from the database
        res.status(200).json(orders); // Send back the orders as a response
        } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error }); // Handle errors
        }
    });

    export default routerrr;