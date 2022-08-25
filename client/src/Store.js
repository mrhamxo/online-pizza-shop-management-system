import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPizzaReducer, addPizzaReducer, getPizzaByIdReducer, updatePizzaByIdReducer } from "./reducers/pizzaReducer";
import { cartReducer } from "./reducers/cartReducer";
import { getAllUsersReducer, loginUserReducer, registerUserReducer } from "./reducers/userReducer";
import { getAllUserOrderReducer, getUserOrderReducer, placeOrderReducer } from "./reducers/orderReducer";

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const rootReducer = combineReducers({
  getAllPizzaReducer: getAllPizzaReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrderReducer: getUserOrderReducer,
  addPizzaReducer: addPizzaReducer,
  getPizzaByIdReducer: getPizzaByIdReducer,
  getAllUserOrderReducer: getAllUserOrderReducer,
  getAllUsersReducer: getAllUsersReducer,
  updatePizzaByIdReducer: updatePizzaByIdReducer,
});

const initialState = { 
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  },
};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
