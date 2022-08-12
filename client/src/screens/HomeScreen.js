import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PizzaCard from "../components/PizzaCard";
import AllPizza from "../pizza-data";

const HomeScreen = () => {
  return (
    <>
      <Container>
        <Row>
          {AllPizza.map(pizza => {
            return (
              <Col md={4}>
                <PizzaCard pizza={pizza} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
