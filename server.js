///////////////////////////////
// DEPENDENCIES
///////////////////////////////
require('dotenv').config();
const { PORT = 5000, MONGODB_URL } = process.env;

const mongoose = require("mongoose");
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
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
// MODELS
///////////////////////////////




///////////////////////////////
// MIDDLEWARE
///////////////////////////////
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

///////////////////////////////
// ROUTES
///////////////////////////////
app.get('/', (req, res) => {
    res.send('Baku is here');
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


app.use('/users', usersRouter);
app.use('/recipes', recipesRouter);

///////////////////////////////
// LISTENER
///////////////////////////////
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) });
