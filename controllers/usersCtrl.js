// require('dotenv').config();
// const express = require('express');
// const userRouter = express.Router();
const Users = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


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

                // Password encryption
                const passwordHash = await bcrypt.hash(password, 10);
                const newUser = new Users({
                    name, email, password: passwordHash
                });

                // Save to DB
                await newUser.save()

                // Create a jsonwebtoken to authentication
                const accesstoken = createAccessToken({id: newUser._id})

                res.json({ msg: "Registration Successful!" })

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

const createAccessToken = (user) => {
    return jwt.sign(user, )
}

module.exports = userCtrl



