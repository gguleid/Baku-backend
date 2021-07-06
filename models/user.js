const mongoose = require('mongoose');


// user Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        requried: true,
        trim: true,
    },
    email: {
        type: String,
        requried: true,
        trim: true,
    },
    password: {
        type: String,
        requried: true,
    },
    role: {
        type: Number,
        default: 0,
    },
    cart: {
        type: Array,
        default: 0,
    },
 },
 
{
    timestamps: true,
}
    );

const Customer = mongoose.model('Users', userSchema);

module.exports = User;