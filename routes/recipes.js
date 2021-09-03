const Express = require('express');
const router = Express.Router();
const Recipe = require('../model/recipes');

// getting all
router.get('/', async (request, response) => {
    try {
        const recipes = await Recipe.find();
        response.json(recipes);
    }
    catch (err) {
        response.status(500).json({ message : err.message });
    }
});

// getting one
router.get('/:id', getRecipe, async (request, response) => {
    
    response.send(response.recipe.name);
});

// creating one
router.post('/', async (request, response) => {
    const recipe = new Recipe({
        name: request.body.name,
        ingredients: request.body.ingredients,
        directions: request.body.directions
    });
    try {
        const newRecipe = await recipe.save();
        response.status(201).json(newRecipe);
    }
    catch (err) {
        response.status(400).json({ message : err.message })
    }
});

// updating one
router.patch('/:id', getRecipe, async (request, response) => {
    if (request.body.name) {
        response.recipe.name = request.body.name;
    }
    if (request.body.ingredients) {
        response.recipe.ingredients = request.body.ingredients;
    }
    if (request.body.directions) {
        response.recipe.directions = request.body.directions;
    }
    try {
        const updatedRecipe = await response.recipe.save();
        response.json(updatedRecipe);
    }
    catch (err) {
        response.status(400).json({ message : err.message });
    }
});

// deleting one
router.delete('/:id', getRecipe, async (request, response) => {
    try {
        await response.recipe.remove();
        response.status(200).json({ message : "Deleted recipe"})
    }
    catch (err) {
        response.status(500).json({ message : err.message })
    }
});


async function getRecipe(request, response, next) {
    try {
        var recipe = await Recipe.findById(request.params.id);
        if (!recipe) {
            return response.status(404).json({ message: 'Cannot find recipe'});
        }
    }
    catch (err) {
        return response.status(500).json({ message : err.message })
    }

    response.recipe = recipe;
    next();
}

module.exports = router;