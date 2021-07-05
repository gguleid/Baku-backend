const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Products Schema
const ProductsSchema = new mongoose.Schema({
    name: {
        type: String,
        requried: true,
    },
    image: String,
    price: Number,
    description: String

 },
{
    timestamps: true,
}
    );

const Products = mongoose.model('Products', ProductsSchema);

module.exports = Products;