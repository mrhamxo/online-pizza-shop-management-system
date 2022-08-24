const express = require("express");
const router = express.Router();
const pizzaModel = require("../models/pizzaModel");

// get all pizza || GET REQUEST
router.get("/getallpizzas", async (req, res) => {
  try {
    const pizzas = await pizzaModel.find({});
    res.send(pizzas);
  } catch (error) {
    res.json({ message: error });
  }
});

// add new pizza in admin penal || POST REQUEST
router.post("/addpizza", async (req, res) => {
  const pizza = req.body;

  try {
    const newPizza = new pizzaModel({
      name: pizza.name,
      image: pizza.image,
      varients: ["small", "medium", "large"],
      description: pizza.description,
      category: pizza.category,
      prices: [pizza.prices],
    });

    await newPizza.save();
    res.status(201).send("New Pizza Added Successfully");
  } catch (error) {
    res.json({ message: error });
  }
});

// get pizza by id in admin penal || POST REQUEST
router.post("/getpizzabyid", async (req, res) => {
  const pizzaId = req.body.pizzaId;

  try {
    const pizza = await pizzaModel.findOne({_id: pizzaId});
    res.send(pizza);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;