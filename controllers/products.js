require('dotenv').config();
const express = require('express');
const productsRouter = express.Router();
const Products = require('../models/products');



///////////////////////////////
// ROUTES
///////////////////////////////

// Products Index
productsRouter.get('/', async (req, res) => {
    try {
        res.json(await Products.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});

// Products create route
productsRouter.post('/', async (req, res) => {
    try {
        res.json(await Products.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
})





module.exports = productsRouter;


