import React, { useReducer } from "react";
import axios from "axios";

export const productsContext = React.createContext();
const INIT_STATE = {
  products: [],
  oneProduct: null,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_ONE":
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
}
const PRODUCTS_API = "http://localhost:8000/products";
const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createProduct(newProduct) {
    await axios.post(PRODUCTS_API, newProduct);
  }
  // !read
  async function getProduct() {
    const res = await axios(PRODUCTS_API);
    // console.log(res);
    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data,
    });
  }
  // !delete
  async function deleteProduct(id) {
    await axios.delete(`${PRODUCTS_API}/${id}`);
    getProduct();
  }
  // ! Details
  async function getOneProduct(id) {
    const res = await axios(`${PRODUCTS_API}/${id}`);

    dispatch({
      type: "GET_ONE",
      payload: res.data,
    });
  }
  return (
    <productsContext.Provider
      value={{
        products: state.products,
        oneProduct: state.oneProduct,
        createProduct,
        getProduct,
        deleteProduct,
        getOneProduct,
      }}>
      {children}
    </productsContext.Provider>
  );
};
export default ProductsContextProvider;
