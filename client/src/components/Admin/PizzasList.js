import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Table } from "react-bootstrap";
import { getAllPizzas, deletePizzaAction } from "../../actions/pizzaAction";
// import PizzaCard from "../PizzaCard";
import Loading from "../Loading";
import Error from "../Error";
import { Link } from "react-router-dom";

const PizzasList = () => {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzaState;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error="Something went wrong" />
      ) : (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Images</th>
                <th>Pizza Name</th>
                <th>Prices</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pizzas.map((pizza, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={pizza.image}
                      alt={pizza.name}
                      width="100px"
                      height="100px"
                    />
                  </td>
                  <td>{pizza.name}</td>
                  <td>
                    Small {pizza.prices[0]["small"]}
                    <br />
                    Medium {pizza.prices[0]["medium"]}
                    <br />
                    Large {pizza.prices[0]["large"]}
                  </td>
                  <td>{pizza.category}</td>
                  <td>
                    <Link to={`/admin/editpizza/${pizza._id}`}>
                      {" "}
                      <AiFillEdit style={{ cursor: "pointer" }} />
                    </Link>
                    &nbsp;{" "}
                    <AiFillDelete
                      style={{ color: "red", cursor: "pointer" }}
                      onClick={() => {dispatch(deletePizzaAction(pizza._id))}}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};
// dispatch(deletePizza(pizza._id))
export default PizzasList;
