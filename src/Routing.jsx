import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";

const Routing = () => {
  return (
    <Routes>
      <Route path="/products" element={<ProductList />} />
    </Routes>
  );
};

export default Routing;
