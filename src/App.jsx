import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import SingleProduct from "./screens/SingleProduct";
import Dashboard from "./screens/Dashboard";
import AllProduct from "./screens/AllProduct";
import About from "./screens/About";
import Navbar from "./components/Navbar";
import "./index.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="product/:id" element={<SingleProduct />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="all-products" element={<AllProduct />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
