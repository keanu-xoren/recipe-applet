// import modules
const Express = require('express');
const Mongoose = require('mongoose');
require('dotenv').config();

// connect to database
Mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = Mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

// application settings
const app = Express();
app.use(Express.json());

const recipeRouter = require('./routes/recipes.js');



app.use('/recipes', recipeRouter);
app.listen(3000, () => console.log('Server Started'));