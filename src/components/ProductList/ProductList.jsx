import { Box, Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { productsContext } from "../../context/ProductsContext";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = () => {
  const { products, getProduct } = useContext(productsContext);
  useEffect(() => {
    getProduct();
  }, []);
  // console.log(products);
  return (
    <Container>
      <Box>
        {products.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Box>
    </Container>
  );
};

export default ProductList;
