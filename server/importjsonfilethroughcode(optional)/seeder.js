const connectDB = require('../config/databaseConnection');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Pizza = require('../models/pizzaModel');
const Pizzas = require('./pizza-data');
require = ('colors');

// config dotenv and mongodb connection
dotenv.config();
connectDB();

//Importing the pizza data from the pizza-data.js file
const importData = (async () => {
    try {
        await Pizza.deleteMany();
        const SampleData = Pizzas.map(pizza => {
            return {...pizza};
        });
        await Pizza.insertMany(SampleData);
        console.log('Data imported successfully'.bgGreen.green.bold);
        process.exit();
    } catch (error) {
        console.log(`error: ${error}`.bgRed.red.bold);
        process.exit(1);
    }
});

const dataDestroy = () => {};

if(process.argv[2] === '--d') {
    dataDestroy();
} 
else {
    importData();
}

