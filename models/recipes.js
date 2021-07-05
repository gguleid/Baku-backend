const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const RecipeSchema = new Schema(
        {
            drinkName: String,
            image: String,
            name: String,
            createdBy: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'User',
                },
        }, { timestamps: true },
);
            

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;