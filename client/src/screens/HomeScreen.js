import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import { getAllPizzas } from "../actions/pizzaAction";
import PizzaCard from "../components/PizzaCard";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzaState;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
      <Container>
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error while fectching data from server</h1>
        ) : (
          <Row>
            {pizzas.map((pizza) => {
              return (
                <Col md={4}>
                  <PizzaCard pizza={pizza} />
                </Col>
              );
            })}
          </Row>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;
