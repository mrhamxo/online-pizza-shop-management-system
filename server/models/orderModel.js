const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    userid: {
      type: String,
    },
    orderItems: [],
    shippingAddress: {
      type: Object,
    },
    orderAmount: {
      type: String,
    },
    isDelivered: {
      type: String,
    },
    transactionId: {
      type: String,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
