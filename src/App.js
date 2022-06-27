import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import ProductsContextProvider from "./context/ProductsContext";
import Routing from "./Routing";

function App() {
  return (
    <ProductsContextProvider>
      <BrowserRouter>
        <Header />
        <Routing />
      </BrowserRouter>
    </ProductsContextProvider>
  );
}

export default App;
