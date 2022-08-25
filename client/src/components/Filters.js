import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Form, Row } from "react-bootstrap";
import { filterPizzaAction } from "../actions/pizzaAction";

const Filters = () => {
  const [searchKey, setSearchKey] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {}, []);
  return (
    <div className="p-4 mt-4 bg-info">
      <Form>
        <Row>
          <Col>
            <Form.Control
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
              placeholder="Search Pizza"
            />
          </Col>
          <Col>
            <Form.Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              aria-label="Default select example"
            >
              <option>Open this select menu</option>
              <option value="1">All</option>
              <option value="2">veg</option>
              <option value="3">nonveg</option>
            </Form.Select>
          </Col>
          <Col>
            <Button
              onClick={() => {
                dispatch(filterPizzaAction(searchKey, category));
              }}
            >
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Filters;
