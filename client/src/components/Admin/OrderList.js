import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deliverOrderAction,
  getAllUserOrderAction,
} from "../../actions/orderAction";
import Error from "../Error";
import Loading from "../Loading";
import { Button, Table } from "react-bootstrap";

const OrderList = () => {
  const allOrdersState = useSelector((state) => state.getAllUserOrderReducer);
  const { loading, error, orders } = allOrdersState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUserOrderAction());
  }, [dispatch]);
  return (
    <div>
      <h1 className="text-center">Orders List</h1>
      {loading && <Loading />}
      {error && <Error error="Admin orders request fails" />}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Email</th>
            <th>User ID</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.email}</td>
                <td>{order.transactionId}</td>
                <td>RS {order.orderAmount}/-</td>
                <td>{order.createdAt}</td>
                <td>
                  {order.isDeliverd ? (
                    <h5 className="text-success">Deliverd</h5>
                  ) : (
                    <>
                      <Button
                        className="btn-danger"
                        onClick={() => {
                          dispatch(deliverOrderAction(order._id));
                        }}
                      >
                        Deliver
                      </Button>
                    </>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Outlet />
    </div>
  );
};

export default OrderList;
