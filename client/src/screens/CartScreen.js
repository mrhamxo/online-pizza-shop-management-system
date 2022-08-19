import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { cartAction, deleteFromCart } from "../actions/cartAction";
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";
import Checkout from "../components/Checkout";

const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducer);
  // two different methods to get the cart items
  const cartItems = cartState.cartItems; //option 1
  // const { cartItems } = cartState; //option 2
  const dispatch = useDispatch();
  const subTotal = cartItems.reduce((x, item) => x + item.price, 0);

  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <h1>My Cart</h1>
            <Row>
              {cartItems.map((item) => (
                <>
                  <Col md={7}>
                    <h4>
                      {item.name} [{item.varient}]
                    </h4>
                    <h6>
                      Price: {item.quantity} X {item.prices[0][item.varient]} ={" "}
                      {item.price}
                    </h6>
                    <h4>
                      Quantity: &nbsp;
                      <FaMinusCircle
                        className="text-danger"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch(
                            cartAction(item, item.quantity - 1, item.varient)
                          )
                        }
                      />{" "}
                      &nbsp;
                      {item.quantity} &nbsp;
                      <FaPlusCircle
                        className="text-success"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch(
                            cartAction(item, item.quantity + 1, item.varient)
                          )
                        }
                      />
                    </h4>
                  </Col>
                  <Col md={5}>
                    <img
                      alt={item.name}
                      src={item.image}
                      style={{ width: "80px", height: "80px" }}
                    />
                    <FaTrash
                      className="text-danger"
                      style={{
                        cursor: "pointer",
                        marginLeft: "20px",
                        fontSize: "30px",
                      }}
                      onClick={() => dispatch(deleteFromCart(item))}
                    />
                  </Col>
                  <hr />
                </>
              ))}
              ;
            </Row>
          </Col>
          <Col md={4}>
            <h1>Total Payments</h1>
            <h4>Sub Total</h4>
            <h4>RS: {subTotal} /-</h4>
            <Checkout subTotal={subTotal} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CartScreen;
