import axios from "axios";

export const getAllPizzas = () => (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });

  try {
    const res = axios.get("/api/pizzas/getallpizzas");
    console.log(res);
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAILURE", payload: error });
  }
};
