const mongoose = require('require');
const Schema = mongoose.Schema;


const RecipeSchema = new mongoose.Schema({
    drinkName: String,
    image: String,
    name: String,
    
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;