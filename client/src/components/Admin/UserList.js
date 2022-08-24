import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAction } from "../../actions/userAction";
import Error from "../Error";
import Loading from "../Loading";
import { deleteUserAction } from "../../actions/userAction";
import { Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";

const UserList = () => {
  const allUsersState = useSelector((state) => state.getAllUsersReducer);
  const { loading, error, users } = allUsersState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsersAction());
  }, [dispatch]);
  return (
    <div>
      <h1>Users List</h1>
      {loading && <Loading />}
      {error && <Error error="Error while Fetching Users" />}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <AiFillDelete
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => {
                      dispatch(deleteUserAction(user._id));
                    }}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserList;
