import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import AddNewPizza from "./components/Admin/AddNewPizza";
import OrderList from "./components/Admin/OrderList";
import PizzasList from "./components/Admin/PizzasList";
import UserList from "./components/Admin/UserList";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Policy from "./components/Policy";
import TopBar from "./components/TopBar";
import AdminScreen from "./screens/AdminScreen";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import OrderScreen from "./screens/OrderScreen";
import Register from "./screens/Register";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/orders" element={<OrderScreen />} />
        <Route path="/admin" element={<AdminScreen />} >
          <Route path="userlist" element={<UserList />} />
          <Route path="pizzaslist" element={<PizzasList />} />
          <Route path="addnewpizza" element={<AddNewPizza />} />
          <Route path="orderlist" element={<OrderList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
