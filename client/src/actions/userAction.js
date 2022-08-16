import axios from "axios";

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "REGISTER_USER_REQUEST" });
  try {
    const response = await axios.post("/api/users/register", user);
    dispatch({ type: "REGISTER_USER_SUCCESS", payload: response.data });
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
  // dispatch({ type: "LOGIN_USER_REQUEST" });
  localStorage.removeItem("currentUser");
  window.location.href = '/login';
};
