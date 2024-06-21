import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Footer from "./Components/Footer/Footer";
import UserAuth from "./Pages/auth/UserAuth";

const App = () => {
  return (
    <div className="">
      <div className="app">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/signIn" element={<UserAuth type="Sign-In"/>}/>
        <Route path="/SignUp" element={<UserAuth type="Sign-Up"/>}/>
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
