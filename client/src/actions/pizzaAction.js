import axios from "axios";

export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });

  try {
    const res = await axios.get("/api/pizzas/getallpizzas");
    console.log(res);
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAILURE", payload: error });
  }
};

// addpizzaAction for admin penal
export const addPizzaAction = (pizza) => async (dispatch) => {
  dispatch({ type: "ADD_PIZZAS_REQUEST" });
  try {
    await axios.post("/api/pizzas/addpizza", {pizza});
    dispatch({ type: "ADD_PIZZAS_SUCCESS"});
  } catch (error) {
    dispatch({ type: "ADD_PIZZAS_FAILURE", payload: error });
  }
};

// getpizzabyidAction for admin penal
export const getPizzaByIdAction = (pizzaId) => async (dispatch) => {
  dispatch({ type: "GET_PIZZABYID_REQUEST" });
  try {
    const response = await axios.post("/api/pizzas/getpizzabyid", {pizzaId});
    dispatch({ type: "GET_PIZZABYID_SUCCESS", payload:response.data });
  } catch (error) {
    dispatch({ type: "GET_PIZZABYID_FAILURE", payload: error });
  }
};
