import React from "react";
import { Button } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import { placeOrderAction } from "../actions/orderAction";

const Checkout = ({ subTotal }) => {
  const dispatch = useDispatch();

  const tokenHandler = (token) => {
    dispatch(placeOrderAction(token, subTotal));
    console.log(token);
  };

  return (
    <StripeCheckout
      amount={subTotal * 100}
      shippingAddress
      token={tokenHandler}
      stripeKey="pk_test_51LXUdaAYllmvDdRqprMGvfYDz1iGATUGCKldIKaNQjqWpME3QFFiAVKegedO0TmJqZU35bR6NmqzkN48n9dOxWHf00XKr39MrX"
      currency="PKR"
    >
      <Button className="bg-warning">Pay Now</Button>
    </StripeCheckout>
  );
};

export default Checkout;
