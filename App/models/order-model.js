const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'UserID is required'],
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
    },
    paymentMode: {
        type: String,
        required: [true, 'Payment mode is required'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    paymentStatus: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;