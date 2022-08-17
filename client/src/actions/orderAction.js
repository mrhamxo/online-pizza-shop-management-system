import axios from "axios";

export const placeOrderAction =
  (token, subTotal) => async (dispatch, getState) => {
    dispatch({ type: "PLACE_ORDER_REQUEST" });
    const currentUser = getState().loginUserReducer.currentUser;
    const cartItems = getState().cartReducer.cartItems;
    try {
      const response = await axios.post("/api/orders/placeorder", {
        token,
        subTotal,
        currentUser,
        cartItems,
      });
      dispatch({ type: "PLACE_ORDER_SUCCESS", payload: response.data });
      console.log(response.data);
    } catch (error) {
      dispatch({ type: "PLACE_ORDER_FAILURE", payload: error.message });
      console.log(error.message);
    }
  };
