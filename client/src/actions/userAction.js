import axios from "axios";
import swal from 'sweetalert';

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "REGISTER_USER_REQUEST" });
  try {
    await axios.post("/api/users/register", user);
    dispatch({ type: "REGISTER_USER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "REGISTER_USER_FAILURE", payload: error });
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "LOGIN_USER_REQUEST" });
  try {
    const response = await axios.post("/api/users/login", user);
    dispatch({ type: "LOGIN_USER_SUCCESS", payload: response.data });
    
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "LOGIN_USER_FAILURE", payload: error });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  window.location.href = '/login';
};

export const getAllUsersAction = () => async (dispatch) => {
  dispatch({ type: "GET_USERS_REQUEST" });

  try {
    const res = await axios.get("/api/users/getallusers");
    console.log(res);
    dispatch({ type: "GET_USERS_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "GET_USERS_FAILURE", payload: error });
  }
};

export const deleteUserAction = (userid) => async (dispatch) => {
  try {
    await axios.post("/api/users/deleteuser", { userid });
    swal("User Deleted Succss!", "success");
    window.location.reload();
    // console.log(res);
  } catch (error) {
    swal("Errro While Deleteing User");
  }
};