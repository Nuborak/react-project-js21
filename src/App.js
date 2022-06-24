import React from "react";
import { BrowserRouter } from "react-router-dom";
import ProductsContextProvider from "./context/ProductsContext";
import Routing from "./Routing";

function App() {
  return (
    <ProductsContextProvider>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </ProductsContextProvider>
  );
}

export default App;
