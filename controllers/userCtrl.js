require('dotenv').config();
const express = require('express');
const customerRouter = express.Router();
const bcrypt = require('bcrypt');
const Customer = require('../models/customers');


///////////////////////////////
// ROUTES
///////////////////////////////

customerRouter.get('/', async (req,res) => {
    try {
        const customer = await Customer.find({});
        res.json({ customers });
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = customerRouter;


