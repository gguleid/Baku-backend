require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { PORT = 5000, MONGODB_URL } = process.env;
const mongoose = require("mongoose");
const app = express();


const Router = require('express').Router;
///////////////////////////////
// DATABASE CONNECTION
///////////////////////////////
mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

mongoose.connection
.on("open", () => console.log("You're connected to mongoose"))
.on("closed", () => console.log("You're disconnected to mongoose"))
.on("error", (error) => console.log(error));


///////////////////////////////
// MIDDLEWARE
///////////////////////////////
app.use(cors());
app.use(express.json());

///////////////////////////////
// ROUTES
///////////////////////////////
const customersRouter = require('./controllers/customer');
app.use('/customers', customersRouter);

const recipesRouter= require('./routes/recipes');
app.use('/recipes', recipesRouter);



app.get('/', (req, res) => {
    res.send('Baku cold brew');
})

// Recipes Index
app.get('/recipes', async (req, res) => {
    try {
        res.json(await Recipe.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});

// Recipe create route
app.post('/recipes', async (req, res) => {
    try {
        res.json(await Recipe.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
})



///////////////////////////////
// LISTENER
///////////////////////////////
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) });
