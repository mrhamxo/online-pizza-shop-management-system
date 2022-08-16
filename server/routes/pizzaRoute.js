const express = require('express');
const router = express.Router();
const pizzaModel = require('../models/pizzaModel');


// get all pizza || GET REQUEST
router.get('/getallpizzas', async(req, res) => {
    try {
        const pizzas  = await pizzaModel.find({});
        res.send(pizzas);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;