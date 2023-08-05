import React, { useContext, useEffect } from "react";
import { productContext } from "../../context/ProductContext/ProductContext";
import { IProductContextType } from "../../context/ProductContext/types";
import ProductCard from "./ProductCard";
import { Grid } from "@mui/material";

const ProductList = () => {
  const { getProducts, products } = useContext(
    productContext
  ) as IProductContextType;

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Grid container spacing={2} justifyContent="center">
        {products ? (
          products.map((item) => <ProductCard key={item.id} item={item} />)
        ) : (
          <h2>Loading...</h2>
        )}
      </Grid>
    </div>
  );
};

export default ProductList;
