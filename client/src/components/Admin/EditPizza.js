import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPizzaByIdAction, updatePizzaAction } from "../../actions/pizzaAction";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import Error from "../Error";
import { Button, Col, Form, Row } from "react-bootstrap";

const EditPizza = () => {
  const [name, setName] = useState("");
  const [smallPrice, setSmallPrice] = useState();
  const [mediumPrice, setMediumPrice] = useState();
  const [largePrice, setLargePrice] = useState();
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const getPizzaByState = useSelector((state) => state.getPizzaByIdReducer);
  const { pizza } = getPizzaByState;
  const updatePizzaState = useSelector((state) => state.updatePizzaByIdReducer);
  const { updateloading, updateerror } = updatePizzaState;
  const dispatch = useDispatch();
  const id = useParams();
  // console.log(id);

  useEffect(() => {
    if (pizza) {
      if (pizza._id === id.pizzaId) {
        setName(pizza.name);
        setDescription(pizza.description);
        setCategory(pizza.category);
        setImage(pizza.image);
        setSmallPrice(pizza.prices[0]["small"]);
        setMediumPrice(pizza.prices[0]["medium"]);
        setLargePrice(pizza.prices[0]["large"]);
      } else {
        dispatch(getPizzaByIdAction(id.pizzaId));
      }
    } else {
      dispatch(getPizzaByIdAction(id.pizzaId));
    }
  }, [pizza, dispatch, id.pizzaId]);
  const submitForm = (e) => {
    e.preventDefault();
    const updatedPizza = {
      _id: id.pizzaId,
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
    dispatch(updatePizzaAction(updatedPizza));
  };
  return (
    <div>
      {updateloading && <Loading />}
      {updateerror && <Error error="add new pizza error" />}
      {/* {success && <Success success="Pizza Added Successfully" />} */}
      <Form onSubmit={submitForm} className="bg-light p-4">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter email"
            />
          </Form.Group>
          <Row className="mb-3 mt-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Small Price</Form.Label>
              <Form.Control
                type="text"
                value={smallPrice}
                onChange={(e) => setSmallPrice(e.target.value)}
                placeholder="Enter Small Price"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Medium Price</Form.Label>
              <Form.Control
                type="text"
                value={mediumPrice}
                onChange={(e) => setMediumPrice(e.target.value)}
                placeholder="Enter medium price"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Large Price</Form.Label>
              <Form.Control
                type="text"
                value={largePrice}
                onChange={(e) => setLargePrice(e.target.value)}
                placeholder="Enter larg price"
              />
            </Form.Group>
          </Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Add Image URL"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Description"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter Category"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update Pizza
        </Button>
      </Form>
    </div>
  );
};

export default EditPizza;
