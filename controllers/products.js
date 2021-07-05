require('dotenv').config();
const express = require('express');
const productsRouter = express.Router();




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





module.exports = productsRouter;


