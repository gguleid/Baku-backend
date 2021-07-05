const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Customer Schema
const CustomerSchema = new mongoose.Schema({
    customerName: {
        type: String,
        requried: true,
        trim: true,
        minlegth: 3,
  },
 },
{
    timestamps: true,
}
    );

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;