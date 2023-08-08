import React, { useContext, useEffect } from "react";
import { productContext } from "../../context/ProductContext/ProductContext";
import { IProductContextType } from "../../context/ProductContext/types";
import ProductCard from "./ProductCard";
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Pagination,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { Limit } from "../../models/const";
import FilterProduct from "./FilterProduct";

const ProductList = () => {
  const { getProducts, products, productTotalCount, page, setPage } =
    useContext(productContext) as IProductContextType;

  const [paginateParams, setPaginateParms] = useSearchParams();

  useEffect(() => {
    setPaginateParms({
      _page: page.toString(),
      _limit: Limit.toString(),
    });
  }, [page]);

  useEffect(() => {
    getProducts();
  }, [paginateParams]);
  return (
    <>
      <Container
        sx={{ display: "flex", justifyContent: "center", flexDirection: "row" }}
      >
        <FilterProduct />
      </Container>
      <Box>
        <Grid container spacing={2} justifyContent="center">
          {products ? (
            products.map((item) => <ProductCard key={item.id} item={item} />)
          ) : (
            <CircularProgress />
          )}
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          m: 5,
        }}
      >
        <Pagination
          color="primary"
          count={productTotalCount}
          page={page}
          onChange={(_, value) => setPage(value)}
        />
      </Box>
    </>
  );
};

export default ProductList;
