import React, { useEffect } from "react";
import { getUserOrderAction } from "../actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { Col, Row } from "react-bootstrap";

const OrderScreen = () => {
  const orderState = useSelector((state) => state.getUserOrderReducer);
  const { loading, error, orders } = orderState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrderAction());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Your Order Screen</h1>
      {loading && <Loading />}
      {error && <Error error="something went wrong" />}
      {orders &&
        orders.map((order) => (
          <div className="container border p-4 bg-light">
            <Row>
              <Col md={4}>
                {order.orderItems.map((item) => (
                  <div className="container">
                    <h3>
                      {item.name} [{item.varient}] * {item.quantity} ={" "}
                      {item.price}
                    </h3>
                  </div>
                ))}
              </Col>
              <Col md={4}>
                <h3>Address</h3>
                <h5>Street: {order.shippingAddress.street}</h5>
                <h5>City: {order.shippingAddress.city}</h5>
                <h5>PinCode: {order.shippingAddress.pinCode}</h5>
                <h5>Country: {order.shippingAddress.Country}</h5>
              </Col>
              <Col md={4}>
                <h3>Order Info</h3>
                <h5>Order Amount: {order.orderAmount}</h5>
                <h5>Transaction Id: {order.transactionId}</h5>
                <h5>Order Id: {order._id}</h5>
              </Col>
            </Row>
          </div>
        ))}
    </div>
  );
};

export default OrderScreen;
