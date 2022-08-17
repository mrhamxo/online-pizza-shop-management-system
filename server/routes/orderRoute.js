const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51LXUdaAYllmvDdRqfbye5yZGirX5g26bj8Ct0gLoawLPzyuzYeLv2NkkdCssRxFgSDw9ZAcDyNpAPS0UEc3tYrWn00XvpTzw72"
);

router.post("/placeorder", async (req, res) => {
  const { token, subTotal, currentUser, cartItems } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email, // customer email address //token.email,
      source: token.id, // obtained with Stripe.js
    });
    const payment = await stripe.paymentIntents.create(
      {
        amount: subTotal * 100,
        currency: "pkr",
        customer: customer.id,
        description: "Pizza Order",
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    if (payment) {
      res.send("Payment Success");
    } else {
      res.send("Payment Failed");
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: "Something went wrong", error: error.stack });
  }
});

module.exports = router;
