import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { addPizzaAction } from "../../actions/pizzaAction";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading";
import Error from "../Error";
import Success from "../Success";

const AddNewPizza = () => {
  const [name, setName] = useState("");
  const [smallPrice, setSmallPrice] = useState();
  const [mediumPrice, setMediumPrice] = useState();
  const [largePrice, setLargePrice] = useState();
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const addPizzaState = useSelector((state) => state.addPizzaReducer);
  const { loading, success, error } = addPizzaState;

  const submitForm = (e) => {
    e.preventDefault();
    const pizza = {
      name,
      image,
      description,
      category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice,
      },
    };
    dispatch(addPizzaAction(pizza));
  };

  return (
    <div>
      {loading && (<Loading />)}
      {error && (<Error error="Add new pizza error" />)}
      {success && (<Success success="Pizza Added Successfully" />)}
      <Form onSubmit={submitForm} className="bg-light p-4">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
            />
          </Form.Group>
          <Row className="mb-3 mt-3">
            <Form.Group as={Col} controlId="formGridPrice">
              <Form.Label>Small Price</Form.Label>
              <Form.Control
                type="text"
                value={smallPrice}
                onChange={(e) => setSmallPrice(e.target.value)}
                placeholder="Enter Small Price"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPrice">
              <Form.Label>Medium Price</Form.Label>
              <Form.Control
                type="text"
                value={mediumPrice}
                onChange={(e) => setMediumPrice(e.target.value)}
                placeholder="Enter medium price"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPrice">
              <Form.Label>Larg Price</Form.Label>
              <Form.Control
                type="text"
                value={largePrice}
                onChange={(e) => setLargePrice(e.target.value)}
                placeholder="Enter larg price"
              />
            </Form.Group>
          </Row>
          <Form.Group as={Col} controlId="formGridImage">
            <Form.Label>Image</Form.Label>
            <Form.Control
              ttype="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Add Image URL"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Description"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter Category"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add New
        </Button>
      </Form>
    </div>
  );
};

export default AddNewPizza;
