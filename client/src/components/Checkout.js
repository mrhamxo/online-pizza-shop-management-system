import React from "react";
import { Button } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrderAction } from "../actions/orderAction";
import Loading from "./Loading";
import Error from "./Error";
import Success from "./Success";

const Checkout = ({ subTotal }) => {
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;

  const dispatch = useDispatch();

  const tokenHandler = (token) => {
    dispatch(placeOrderAction(token, subTotal));
    // console.log(token);
  };

  return (
    <>
      {loading && <Loading />}
      {error && <Error error="something went wrong" />}
      {success && <Success success="order placed Successfully" />}
      <StripeCheckout
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51LXUdaAYllmvDdRqprMGvfYDz1iGATUGCKldIKaNQjqWpME3QFFiAVKegedO0TmJqZU35bR6NmqzkN48n9dOxWHf00XKr39MrX"
        currency="PKR"
      >
        <Button className="bg-warning">Pay Now</Button>
      </StripeCheckout>
    </>
  );
};

export default Checkout;
