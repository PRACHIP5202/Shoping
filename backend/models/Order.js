import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    payment: {
        type: String,
        required: true,
    },
    items: [
        {
            title: String,
            image: String,
            price: Number,
            quantity: Number,
        },
    ],
});

export default mongoose.model('Order', OrderSchema);
