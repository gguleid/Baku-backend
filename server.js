///////////////////////////////
// DEPENDENCIES
///////////////////////////////
require('dotenv').config();
const { PORT = 5000, MONGODB_URL } = process.env;

const mongoose = require("mongoose");
const express = require('express');
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
const RecipeSchema = new mongoose.Schema({
    drinkName: String,
    image: String,
    name: String,
    ingredenits: String,
    directions: String
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

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


///////////////////////////////
// LISTENER
///////////////////////////////
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) });
