const Mongoose = require('mongoose');

const recipeSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: [{type: String, required: true}],
        required: true
    },
    directions: {
        type: [{type: String, required: true}],
        required: true
    }
});


module.exports = Mongoose.model('Recipe', recipeSchema);