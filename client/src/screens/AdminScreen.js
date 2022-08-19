import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import UserList from "../components/Admin/UserList";
import PizzasList from "../components/Admin/PizzasList";
import AddNewPizza from "../components/Admin/AddNewPizza";
import OrderList from "../components/Admin/OrderList";

const AdminScreen = () => {
  const userState = useSelector(state => state.loginUserReducer);
  const {currentUser} = userState;

    // useEffect(() => {
    //   if (localStorage.getItem("currentUser") === null || currentUser.isAdmin) {
    //     // navigate("/login");
    //     window.location.href = "/";
    //   }
    // }, [currentUser]);

  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Row>
          <h1 className="bg-dark text-center text-light p-2">
            Admin Panel page
          </h1>
          <Col md={4}>
            <ButtonGroup vertical style={{ minHeight: "400px" }}>
              <Button
                variant="primary"
                onClick={() => navigate("/admin/userlist")}
              >
                All Users
              </Button>
              <Button
                variant="warning"
                onClick={() => navigate("/admin/pizzaslist")}
              >
                All Pizzas
              </Button>
              <Button
                variant="success"
                onClick={() => navigate("/admin/addnewpizza")}
              >
                Add New Pizza
              </Button>
              <Button
                variant="danger"
                onClick={() => navigate("/admin/orderlist")}
              >
                All Orders
              </Button>
            </ButtonGroup>
          </Col>
          <Col md={8}>
            <Routes>
              <Route path="/" element={<UserList />} />
              <Route path="userlist" element={<UserList />} />
              <Route path="pizzaslist" element={<PizzasList />} />
              <Route path="addnewpizza" element={<AddNewPizza />} />
              <Route path="orderlist" element={<OrderList />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminScreen;
