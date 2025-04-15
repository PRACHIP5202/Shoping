import express from 'express';

import Order from '../models/orderModel.js'; 
const router = express.Router();     // express.Router().post(...).get(...) 

const savedOrder = await Order.create(req.body);
    router.post('/', async (req, res) => {
        
        try {

        res.status(201).json(savedOrder); // Send back the saved order as a response
        } catch (error) {
        res.status(500).json({ message: 'Error saving order', error }); // Handle errors
        }
    })
    router.get('/', async (req, res) => {
        try {
        const orders = await Order.find(); // Fetch all orders from the database
        res.status(200).json(orders); // Send back the orders as a response
        } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error }); // Handle errors
        }
    });

    export default router;