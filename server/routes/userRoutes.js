const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");

// post user register || POST REQUEST
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new userModel({ name, email, password });
  try {
    newUser.save();
    res.status(200).json({
      success: true,
      message: "Resgister Success",
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});

// post user login || POST REQUEST
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.find({ email, password });
    if (user.length > 0) {
      const currentUser = {
        name: user[0].name,
        email: user[0].email,
        isAdmin: user[0].isAdmin,
        _id: user[0]._id,
      };
      res.status(200).send(currentUser);
    } else {
      res.status(400).json({
        message: "Login failed",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "something went wrong",
    });
  }
});

// get All users for admin panel || GET REQUEST
router.get("/getallusers", async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(404).json({ message: error.stack });
  }
});

// Delete user for admin panel || POST REQUEST
router.post("/deleteuser", async (req, res) => {
  const userid = req.body.userid;

  try {
    await userModel.findOneAndDelete({_id: userid});
    res.status(200).send("User Deleted successfully");
  } catch (error) {
    res.status(404).json({ message: error.stack });
  }
});

module.exports = router;
