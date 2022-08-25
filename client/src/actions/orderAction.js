import axios from "axios";

export const placeOrderAction = (token, subTotal) => async (dispatch, getState) => {
    const currentUser = getState().loginUserReducer.currentUser;
    const cartItems = getState().cartReducer.cartItems;
    dispatch({ type: "PLACE_ORDER_REQUEST" });
    // debugger;
    try {
      const response = await axios.post("/api/orders/placeorder", {
        token,
        subTotal,
        currentUser,
        cartItems,
      }
      );
      dispatch({ type: "PLACE_ORDER_SUCCESS", payload: response.data });
      console.log(response);
    } catch (error) {
      dispatch({ type: "PLACE_ORDER_FAILURE", payload: error  });
      console.log(error);
    }
  };

export const getUserOrderAction = () => async (dispatch, getState) => {
  const currentUser = getState().loginUserReducer.currentUser;
  dispatch({ type: "USER_ORDER_REQUEST" });
  try {
    const response = await axios.post("/api/orders/getuserorder", {
      userid: currentUser._id,
    });
    console.log(response);
    dispatch({ type: "USER_ORDER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "USER_ORDER_FAILURE", payload: error });
  }
};

export const getAllUserOrderAction = () => async (dispatch, getState) => {
  // const currentUser = getState().loginUserReducer.currentUser;
  dispatch({ type: "ALL_ORDER_REQUEST" });
  try {
    const response = await axios.get("/api/orders/getalluserorder");
    console.log(response);
    dispatch({ type: "ALL_ORDER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "ALL_ORDER_FAILURE", payload: error });
  }
};

export const deliverOrderAction = (orderid) => async (dispatch, getState) => {
  // const currentUser = getState().loginUserReducer.currentUser;
  dispatch({ type: "GET_ALL_ORDER_REQUEST" });
  try {
    await axios.get("/api/orders/getalluserorder", {orderid});
    // console.log(response);
    alert("Order Deliver Success")
    const orders = await axios.get("/api/orders/getalluserorder");
    dispatch({ type: "GET_ALL_ORDER_SUCCESS", payload: orders.data });
    window.location.reload();
  } catch (error) {
    dispatch({ type: "GET_ALL_ORDER_FAILURE", payload: error });
  }
};
