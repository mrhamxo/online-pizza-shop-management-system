import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import { cartAction } from "../actions/cartAction";

const PizzaCard = ({ pizza }) => {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(cartAction(pizza, quantity, varient));
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ width: "22rem", marginTop: "40px" }}>
        <Card.Img
          variant="top"
          src={pizza.image}
          style={{ height: "250px", cursor: "pointer" }}
          onClick={handleShow}
        />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <hr />
          <Card.Text>
            <Row>
              <Col md={6}>
                <h5>Variants</h5>
                <select
                  className="bg-light text-dark"
                  value={varient}
                  onChange={(e) => setVarient(e.target.value)}
                >
                  {pizza.varients.map((varient) => {
                    return <option>{varient}</option>;
                  })}
                </select>
              </Col>
              <Col md={6}>
                <h5>Quantity</h5>
                <select
                  className="bg-light text-dark"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(10).keys()].map((value, index) => {
                    return <option>{index + 1}</option>;
                  })}
                </select>
              </Col>
            </Row>
          </Card.Text>
          <Row>
            <Col md={6}>Price : RS {pizza.prices[0][varient] * quantity}/-</Col>
            <Col md={6}>
              <Button onClick={addToCartHandler} className="bg-warning text-white">Add to Cart</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* model */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Img
            variant="top"
            src={pizza.image}
            style={{ height: "250px", cursor: "pointer" }}
            onClick={handleShow}
          />
          <h6 className="mt-3">Description:</h6>
          <hr />
          <p>{pizza.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PizzaCard;
