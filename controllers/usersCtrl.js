// require('dotenv').config();
// const express = require('express');
// const userRouter = express.Router();
const bcrypt = require('bcrypt');
const Users = require('../models/user');


///////////////////////////////
// ROUTES
///////////////////////////////

const userCtrl = {
    register: async (req, res) => {
        try {
                const { name, email, password } = req.body;
                
                const user = await Users.findOne({email})
                if(user) return res.status(400).json({msg: "The email already exists."})

                if(password.length < 6) 
                    return res.status(400).json({msg: "Password must be at least 6 characters long."})

                res.json({ msg: "Registration Successful!" })

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = userCtrl



